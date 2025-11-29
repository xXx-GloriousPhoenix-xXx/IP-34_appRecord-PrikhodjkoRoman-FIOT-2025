const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
// const body = document.querySelector("body");

const changeColor = () => {
    const newColor = getRandomHexColor();
    colorSpan.textContent = newColor;
    changeColorButton.style.backgroundColor = newColor;
}

changeColorButton.addEventListener("click", changeColor);