document.querySelectorAll(".carousel").forEach((carousel) => {
  const viewport = carousel.querySelector(".carousel__viewport");
  const btnPrev = carousel.querySelector(".carousel__btn--prev");
  const btnNext = carousel.querySelector(".carousel__btn--next");

  if (!viewport || !btnPrev || !btnNext) return;

  function updateButtons() {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    btnPrev.disabled = viewport.scrollLeft <= 0;
    btnNext.disabled = viewport.scrollLeft >= maxScroll - 1;
    console.log("viewPort.clientWidth", viewport.clientWidth);
  }

  btnNext.addEventListener("click", () => {
    viewport.scrollBy({
      left: viewport.clientWidth,
      behavior: "smooth",
    });
  });

  btnPrev.addEventListener("click", () => {
    viewport.scrollBy({
      left: -viewport.clientWidth,
      behavior: "smooth",
    });
  });

  viewport.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateButtons);
  });

  window.addEventListener("resize", updateButtons);

  updateButtons();
});
