const button = document.getElementById("swap-button");
const input1 = document.getElementById("top-input");
const input2 = document.getElementById("bottom-input");

const swap = () => {
    const tmp = input1.value;
    input1.value = input2.value;
    input2.value = tmp;
}

button.addEventListener("click", swap);