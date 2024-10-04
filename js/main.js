let upBtn = document.querySelector(".up");

upBtn.onclick = function () {
  window.scrollTo(0, 0);
};
window.onscroll = function () {
  if (scrollY >= 50) {
    upBtn.style.cssText = "display:block;";
  } else {
    upBtn.style.cssText = "display:none;";
  }
};

let portfolioItem = document.querySelectorAll(".portfolio-item");

let flipFlag = false;

portfolioItem.forEach((element) => {
  element.addEventListener("click", flipPortfolio);
});

function flipPortfolio() {
  console.log(flipFlag);
  if (flipFlag === false) {
    this.setAttribute(
      "style",
      "transform: perspective(400px) rotateX(180deg);"
    );
    flipFlag = true;
  } else {
    this.setAttribute("style", "transform: perspective(400px) rotateX(0deg);");
    flipFlag = false;
  }
}
