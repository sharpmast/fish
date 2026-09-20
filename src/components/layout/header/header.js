
import './header.scss'
import './menu.scss'

const menuBtn = document.querySelector(".menu__icon");
const mobMenu = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu__icon--active");
  mobMenu.classList.toggle("menu--active");
  wrapper.classList.toggle("wrapper--active");
});

document.addEventListener("click", (event) => {
  const isMenuOpen = mobMenu.classList.contains("menu--active");
  
  const clickedOutsideMenu = !mobMenu.contains(event.target);
  const clickedOutsideBtn = !menuBtn.contains(event.target);

  if (isMenuOpen && clickedOutsideMenu && clickedOutsideBtn) {
    menuBtn.classList.remove("menu__icon--active");
    mobMenu.classList.remove("menu--active");
    wrapper.classList.remove("wrapper--active");
  }
});

const navLinks = document.querySelectorAll(".menu__link"); 

navLinks.forEach((item) => {
  item.addEventListener("click", function (e) {
    const href = item.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault(); 

      menuBtn.classList.remove("menu__icon--active");
      mobMenu.classList.remove("menu--active");
      wrapper.classList.remove("wrapper--active");

      const blockId = href.substring(1);
      const targetBlock = document.getElementById(blockId);

      if (targetBlock) {
        targetBlock.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

