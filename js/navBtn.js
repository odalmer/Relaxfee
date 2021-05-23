// Storing DOM elements
const mobileNavBtn = document.querySelector("#mobileNavBtn");
const navItem = document.querySelector("nav");

let btnClose = false;
mobileNavBtn.addEventListener("click", (e) => {
  if (btnClose == false || navItem.style.background != "#2E294E") {
    navItem.style.background = "#2E294E";
    btnClose = true;
  } else {
    navItem.style.background = "transparent";
    btnClose = false;
  }
});
