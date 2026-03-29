const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing , isAdmin} = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../CloudConfig.js");
const upload = multer({ storage });



// Index route
router
  .route("/")
  .get(wrapAsync(listingsController.index))
  .post(
    isLoggedIn,
    isAdmin,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingsController.createListing)
  )

// New route
router.get("/new", isLoggedIn, listingsController.renderNewForm);

// Show route
router.get(
  "/:id",
  wrapAsync(listingsController.showListing)
);

// Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isAdmin,
  wrapAsync(listingsController.editListing)
);

// Update route
router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
   upload.single('listing[image]'),
  validateListing,
  wrapAsync(listingsController.updateListing)
);

// Delete route
router.delete(
  "/:id",
  isLoggedIn,
  isAdmin,
  wrapAsync(listingsController.destroyListing)
);



module.exports = router;