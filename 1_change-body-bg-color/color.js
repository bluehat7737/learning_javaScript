const colors = ["red", "green", "blue", "purple", "#f3f3f3"];

function color() {
  const colorIndex = parseInt(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorIndex];
}
