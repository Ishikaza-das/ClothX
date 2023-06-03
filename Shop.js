// Sticky slider in nav
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
// 3 bar menu icon in nav
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};

// login  & signup
const formOpenBtn = document.querySelector("#form-open"),
  login = document.querySelector(".login"),
  formcontainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => login.classList.add("show"));
formCloseBtn.addEventListener("click", () => login.classList.remove("show"));

const elements = document.querySelectorAll(".bx.bxs-hide");
elements.forEach((element) => {
  element.classList.add("bxs-hide");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("bx bxs-hide", "bxs-hide"); // eye hind & show
    } else {
      getPwInput.type = "password";
      icon.classList.replace("bxs-hide", "bx bxs-hide"); // eye hind & show
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formcontainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formcontainer.classList.remove("active");
});
