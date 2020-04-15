const image = document.querySelector("img");
const button = document.querySelectorAll(".button");
const index = [
  "bg (1).jpg",
  "bg (2).jpg",
  "bg (3).jpg",
  "bg (4).jpg",
  "bg (5).jpg",
  "bg (6).jpg",
  "bg (7).jpg",
  "bg (8).jpg",
  "bg (9).jpg",
  "bg (10).jpg",
  "bg (11).jpg",
  "bg (12).jpg",
];

let counter = 0;

button.forEach(function () {
  button.addEventListener("click", function (e) {
    if (button.classList.coantains("prev")) {
      counter--;
      if (counter < 0) {
        counter = index.length - 1;
      }
      image.src = index[counter];
    }
  });
  if (button.classList.coantains("next")) {
    counter++;
    if (counter > index.length - 1) {
      counter = 0;
    }
    image.style.backgroundImage = `url('index[counter]')`;
  }
});
