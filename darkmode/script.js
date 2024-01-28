const checkboxInput = document.getElementById("check");
const circle = document.querySelector("#circle");
const slideButton = document.querySelector(".button");
const aTag = document.querySelectorAll("a");
let bg = "rgb(30,30,30)";
checkboxInput.addEventListener("change", (e) => {
  let darkModeOn = e.target.checked;
  if (darkModeOn) {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  slideButton.style.backgroundColor = "white";
  circle.style.left = "45px";
  circle.style.backgroundColor = bg;
  document.body.style.backgroundColor = bg;
  document.body.style.color = "white";
  //   aTag.style.color = "white";
  changeATag("white");
}
function lightMode() {
  document.body.style.backgroundColor = "white";
  slideButton.style.backgroundColor = bg;
  document.body.style.color = "black";
  circle.style.backgroundColor = "white";
  circle.style.left = "5px";
  //   aTag.style.color = "black";
  changeATag("black");
}

function changeATag(color) {
  aTag.forEach((tag) => {
    tag.style.color = color;
  });
}
