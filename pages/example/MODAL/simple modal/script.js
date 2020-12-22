function openModal() {
  document.querySelector(".modal").classList.add("is_open");
}
function closeModal() {
  document.querySelector(".modal").classList.add("is_closing");
  setTimeout(() => {
    document.querySelector(".modal").classList.remove("is_closing");
    document.querySelector(".modal").classList.remove("is_open");
  }, 300);
}