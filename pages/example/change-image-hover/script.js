document.querySelectorAll(".product__img-toggler").forEach((toggler) => {
  toggler.addEventListener("mouseenter", (event) => {
    let current_index = event.target.dataset.index;
    document.querySelectorAll("[data-index]").forEach((elem) => {
      elem.classList.remove("is_active");
    });
    document
      .querySelectorAll(`[data-index="${current_index}"]`)
      .forEach((elem) => {
        elem.classList.add("is_active");
      });
  });
});