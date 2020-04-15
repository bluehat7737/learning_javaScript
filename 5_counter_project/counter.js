const digit = document.querySelector(".digit");
const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
var value = 0;

sub.addEventListener("click", function () {
  value--;
  digit.textContent = value;
  if (value < 0) {
    digit.style.color = "red";
  } else if (value == 0) {
    digit.style.color = "#333333";
  }
});
add.addEventListener("click", function () {
  value++;
  digit.innerHTML = value;
  if (value > 0) {
    digit.style.color = "green";
  } else if (value == 0) {
    digit.style.color = "#333333";
  }
});
