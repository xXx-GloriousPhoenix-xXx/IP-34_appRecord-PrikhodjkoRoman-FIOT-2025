const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const resizeObject = document.getElementById("resize-object");

let currentSize = 12; // em
const minSize = 1;
const maxSize = 20;

const resize = (changeInEm) => {
    currentSize = currentSize + changeInEm;
    currentSize = Math.max(minSize, currentSize);
    currentSize = Math.min(maxSize, currentSize);
    resizeObject.style.width = `${currentSize}em`;
}

increaseButton.addEventListener("click", () => resize(1));
decreaseButton.addEventListener("click", () => resize(-1));
resize(0);