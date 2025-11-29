const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxesContainer = document.getElementById('boxes');

let sizeBias = 0;
const startSize = {
    width: 2,
    height: 2
}

const createBoxes = () => {
    const value = input.value;
    if (value.trim() === '') {
        alert("Введіть кількість елементів")
        return;
    }

    const amount = parseInt(value);
    if (amount < 1 || amount > 100) {
        alert("Кількість елементів має бути від 1 до 100")
        return;
    }

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.classList.add("box");
        div.style.width = `${startSize.width + sizeBias}em`;
        div.style.height = `${startSize.height + sizeBias}em`;
        div.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(div);
        sizeBias++;
    }
}

const destroyBoxes = () => {
    boxesContainer.innerHTML = '';
    sizeBias = 0;
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);