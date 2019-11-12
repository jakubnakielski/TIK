const btn = document.getElementById("heroBtn");
const hero = document.querySelector(".mainHero");

btn.addEventListener("click", e => {
  const heroHeight = hero.getBoundingClientRect().height;
  console.log(e);
  window.scrollTo(0, heroHeight);
});
