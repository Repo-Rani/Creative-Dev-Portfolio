// Toggle Menu Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove("active");
        document.querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Skills Section

document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var percent = elem.getAttribute("data-percent");

    var marked = Math.floor((dots * percent) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");

    pointsMarked.forEach((point, index) => {
      if (index < marked) {
        setTimeout(() => {
          point.classList.add("marked");
        }, index * 50);
      }
    });
  });
});
