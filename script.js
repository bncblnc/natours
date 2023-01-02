const navAbout = document.getElementById("link-about");
const navFeatures = document.getElementById("link-features");
const navTours = document.getElementById("link-tours");
const navStories = document.getElementById("link-stories");
const navBook = document.getElementById("link-book");

function closeNav() {
  document.getElementById("navi-toggle").checked = false;
}

navAbout.addEventListener("click", closeNav);
navFeatures.addEventListener("click", closeNav);
navTours.addEventListener("click", closeNav);
navStories.addEventListener("click", closeNav);
navBook.addEventListener("click", closeNav);
// window.addEventListener("click", function (e) {
//   console.log(e.target);
// });
