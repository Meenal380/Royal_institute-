const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600"
];

let i = 0;

const hero = document.querySelector(".hero-section");

function changeBackground() {
  if (!hero) return;

  hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${images[i]})`;

  i = (i + 1) % images.length;
}

// change every 3 sec
setInterval(changeBackground, 2000);

// first image show
changeBackground();