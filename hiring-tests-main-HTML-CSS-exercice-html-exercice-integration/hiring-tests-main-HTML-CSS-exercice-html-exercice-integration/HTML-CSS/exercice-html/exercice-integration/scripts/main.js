// ***************************
// Navigation
// ***************************
function initNavigation() {
  const navLinks = document.querySelectorAll(".site-nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("site-nav__link--active"));
      link.classList.add("site-nav__link--active");
    });
  });
}

// ***************************
// Carrousel
// ***************************
function initCarousel(carousel) {
  const viewport = carousel.querySelector(".carousel__viewport");
  const slides = carousel.querySelectorAll(".carousel__slide");
  const btnPrev = carousel.querySelector(".carousel__btn--prev");
  const btnNext = carousel.querySelector(".carousel__btn--next");

  if (!viewport || !btnPrev || !btnNext || slides.length === 0) return;

  const getSlideWidth = () => slides[0].clientWidth;

  const updateButtons = () => {
    const slideWidth = getSlideWidth();
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    btnPrev.disabled = viewport.scrollLeft <= 0;
    btnNext.disabled = viewport.scrollLeft >= maxScroll - slideWidth / 2;
  };

  btnNext.addEventListener("click", () => {
    viewport.scrollBy({ left: getSlideWidth(), behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    viewport.scrollBy({ left: -getSlideWidth(), behavior: "smooth" });
  });

  viewport.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateButtons);
  });

  window.addEventListener("resize", updateButtons);

  updateButtons();
}

// ***************************
// Init global
// ***************************
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  document.querySelectorAll(".carousel").forEach(initCarousel);
});
