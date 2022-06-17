const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const display = document.querySelector(".display");

let state = Number(document.querySelector(".display").innerHTML);

increase.addEventListener("click", function () {
  state++;
  display.innerHTML = state;
  console.log(state);
});

decrease.addEventListener("click", function () {
  state--;
  display.innerHTML = state;
  console.log(state);
});
