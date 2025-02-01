const ratingNumber = document.querySelector(".ratingChoice");
let firstEventDone = false;
function Try(value) {
  ratingNumber.innerHTML = `You selected ${value} out of 5`;
  firstEventDone = true;
}

const ratingSection = document.querySelector(".ratingMain");
const thankSection = document.querySelector(".secondSection");

function Swap() {
  if (firstEventDone) {
    ratingSection.classList.add("hidden");
    thankSection.classList.remove("hidden");
  }
}

const button = document.querySelector("#submitButton");
button.addEventListener("click", Swap);

const rateButtons = document.querySelectorAll(".ratingButton");
function changeColor(event) {
  rateButtons.forEach((button) => button.classList.remove("selected"));

  event.target.classList.add("selected");
}

rateButtons.forEach((button) => {
  button.addEventListener("click", changeColor);
});
