const btn = document.getElementById("heroBtn");
const hero = document.querySelector(".mainHero");

btn.addEventListener("click", e => {
  const heroHeight = hero.getBoundingClientRect().height;
  //   smoothScroll(heroHeight);
  window.scrollTo(0, heroHeight);
});

// let currentHeight = 0;
// function smoothScroll(height) {
//   currentHeight++;
//   console.log(currentHeight);
//   if (currentHeight <= parseInt(height)) {
//     window.scrollTo(0, currentHeight);
//     var frame = requestAnimationFrame(smoothScroll);
//   } else cancelAnimationFrame(frame);
// }
