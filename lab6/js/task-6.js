const doubleList = document.getElementById("double-list");
const doubleButton = document.getElementById("double-button");

const double = () => {
    const elements = doubleList.children;
    for (let element of elements) {
        const value = parseInt(element.textContent);
        element.textContent = value * 2;
    }
}

doubleButton.addEventListener("click", double);