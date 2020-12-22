let headerClassList = document.querySelector(".header").classList;
window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    headerClassList.remove("is_hide");
  } else {
    headerClassList.add("is_hide");
  }
  this.oldScroll = this.scrollY;
};