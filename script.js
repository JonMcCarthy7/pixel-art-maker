const canvas = document.getElementById("canvas");
canvas.style.background = "grey";
const pallet = document.getElementById("pallet");
let box = document.createElement("div");
box.classList.add("box");

for (let i = 0; i < 440; i++) {
  canvas.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box" id="box${i + 1}"></div>
  `
  );
}
const colors = [
  "red",
  "pink",
  "orange",
  "yellow",
  "purple",
  "green",
  "blue",
  "brown",
  "white",
  "gray"
];
colors.forEach(el => {
  pallet.insertAdjacentHTML(
    "beforeend",
    `
    <div class="pallet-box color-select" id="${el}" style="background: ${el}"></div>
  `
  );
});

let boxes = document.querySelectorAll(".box");
boxes.forEach(el => {
  el.addEventListener("click", e => {
    e.target.style.background = brush;
  });
});

let brush;

let colorBoxes = document.querySelectorAll(".color-select");

colorBoxes.forEach(el => {
  el.addEventListener("click", e => {
    brush = e.target.id;
  });
});
