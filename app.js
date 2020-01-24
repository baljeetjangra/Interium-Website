const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link");
  const navLinks = document.querySelectorAll(".nav-links");

  //toggle burger
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //toggle animation nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFadeIn 0.5s ease forwards ${index / 2 +
          0.5}s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
};

app();
