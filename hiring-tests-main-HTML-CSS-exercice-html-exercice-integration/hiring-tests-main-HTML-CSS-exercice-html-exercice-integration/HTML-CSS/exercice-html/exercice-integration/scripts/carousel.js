document.querySelectorAll(".carousel").forEach((carousel) => {
  const viewport = carousel.querySelector(".carousel__viewport");
  const slides = carousel.querySelectorAll(".carousel__slide");
  const btnPrev = carousel.querySelector(".carousel__btn--prev");
  const btnNext = carousel.querySelector(".carousel__btn--next");

  if (!viewport || !btnPrev || !btnNext || slides.length === 0) return;

  function getSlideWidth() {
    return slides[0].clientWidth;
  }

  function updateButtons() {
    const slideWidth = getSlideWidth();
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    btnPrev.disabled = viewport.scrollLeft <= 0;
    btnNext.disabled = viewport.scrollLeft >= maxScroll - slideWidth / 2;
  }

  btnNext.addEventListener("click", () => {
    const slideWidth = getSlideWidth();
    viewport.scrollBy({ left: slideWidth, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    const slideWidth = getSlideWidth();
    viewport.scrollBy({ left: -slideWidth, behavior: "smooth" });
  });

  viewport.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateButtons);
  });

  window.addEventListener("resize", updateButtons);

  updateButtons();
});
