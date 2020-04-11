const button = document.querySelector(".button");
const body = document.querySelector("body");
const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const value = document.querySelector(".hex-value");

button.addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexCode.length);
    hex += hexCode[index];
  }
  document.querySelector("body").style.backgroundColor = hex;
  value.textContent = hex;
}
