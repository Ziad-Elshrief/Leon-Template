/* Up button scrolls to top and only appears when you scroll down a bit */
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

/* make portfolio item flip between image and content when you press on it */
let portfolioItem = document.querySelectorAll(".portfolio-item");

let flipFlag = false;

portfolioItem.forEach((element) => {
  element.addEventListener("click", flipPortfolio);
});

function flipPortfolio() {
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

let body = document.querySelector("body");
let links = document.querySelectorAll(".links li a");
let modeBtn = document.querySelector(".mode");

/* function to check # part of the link and give active class 
to the section that is in # link part and remove active class from others 
if # is empty then home is active */

function checkActiveSection() {
  links.forEach(function (e) {
    if (e.getAttribute("href") === location.hash) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  if (location.hash.length === 0) {
    links[0].classList.add("active");
  }
}
/* check active section if # changes or on load */
window.addEventListener("hashchange", checkActiveSection);

window.onload = function () {
  /* get dark mode value from local storage when page loads 
  and make changes to the page by adding dark-mode class to body*/
  if (localStorage.getItem("dark-mode") === "on") {
    body.classList.add("dark-mode");
    modeBtn.firstElementChild.classList.remove("fa-moon");
    modeBtn.firstElementChild.classList.add("fa-sun");
  }
  checkActiveSection();
};

/* change between dark and normal mode using mode button */
modeBtn.onclick = function () {
  if (modeBtn.firstElementChild.classList[1] === "fa-moon") {
    body.classList.add("dark-mode");
    modeBtn.firstElementChild.classList.remove("fa-moon");
    modeBtn.firstElementChild.classList.add("fa-sun");
    localStorage.setItem("dark-mode", "on");
  } else {
    modeBtn.firstElementChild.classList.remove("fa-sun");
    modeBtn.firstElementChild.classList.add("fa-moon");
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "off");
  }
};

/* make menu list appear when you press the list button and change the icon to staggered */
let menu = document.querySelector(".header .menu");
let listBtn = document.querySelector(".list");

listBtn.onclick = function () {
  listBtn.firstElementChild.classList.remove("fa-bars");
  listBtn.firstElementChild.classList.add("fa-bars-staggered");
  menu.style.display = "block";
};

/* change item back to list and make menu disappear when you click cancel */
let listCancel = document.querySelector(".menu button");

listCancel.onclick = function () {
  menu.style.display = "none";
  listBtn.firstElementChild.classList.remove("fa-bars-staggered");
  listBtn.firstElementChild.classList.add("fa-bars");
};
