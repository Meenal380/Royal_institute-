(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const toggleBtn = document.getElementById("themeToggle");

// Check saved theme on load
let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
    toggleBtn.classList.remove("fa-moon");
    toggleBtn.classList.add("fa-sun");
} else {
    document.body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");   // save
        toggleBtn.classList.remove("fa-moon");
        toggleBtn.classList.add("fa-sun");
    } else {
        localStorage.setItem("theme", "light");  // save
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
    }
});

