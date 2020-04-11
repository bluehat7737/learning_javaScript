const messege = document.querySelector("input");
const button = document.querySelector(".submit");
const feedback = document.querySelector(".feedback");
const rMessege = document.querySelector(".messege");

button.addEventListener("click", function () {
  if (messege.value === "") {
    feedback.classList.add("show");
    setTimeout(function () {
      feedback.classList.remove("show");
    }, 2000);
  } else {
    rMessege.textContent = messege.value;
    messege.value = "";
  }
});
