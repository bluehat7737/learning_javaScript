// immediate invoked function expression

(function () {
  const pictures = [
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

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll(".btn");
  const imageDIV = document.querySelector(".img-container");
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        imageDIV.style.backgroundImage = `url('${pictures[counter]}')`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imageDIV.style.backgroundImage = `url('${pictures[counter]}')`;
      }
    });
  });
})();
