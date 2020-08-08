const afterLine = document.querySelector(".after-line");
const beforeLine = document.querySelector(".before-line");

document.querySelector(".container").addEventListener("change", () => {
  let one = document.querySelector(".first input:checked ~ div");
  let two = document.querySelector(".second input:checked ~ div");
  let three = document.querySelector(".third input:checked ~ div");
  const coordinates = [one.getBoundingClientRect().y, two.getBoundingClientRect().y, three.getBoundingClientRect().y];
  
  afterLine.style.height = Math.abs(coordinates[1] - coordinates[2]) + 'px';
  beforeLine.style.height = Math.abs(coordinates[1] - coordinates[0]) + 'px';
  
  afterLine.style.top = Math.min(coordinates[1], coordinates[2]) - 20 + 'px';
  beforeLine.style.top = Math.min(coordinates[1], coordinates[0]) - 20 + 'px';
});