/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue"; // Block scope
  document.querySelector(".title").style.color = titleColor;
  console.log("Inside:", titleColor);
}

headingColor();

// Line causes and error because titleColor is not in scope here
// console.log("Inside:", titleColor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
