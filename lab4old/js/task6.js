const executeTask6 = () => {
    let firstArray = getArray();
    let secondArray = getArray();
    let maxLength = parseInt(prompt("Введіть максимальну довжину нового масиву:"));
    if (isNaN(maxLength) || maxLength <= 0) {
        alert("Некоректне значення довжини");
        return;
    }
    let newArray = makeArray(firstArray, secondArray, maxLength);
    console.log("Отриманий масив:", newArray);
}

const getArray = () => {
    const array = [];
    do {
        let input = prompt("Введіть елемент масиву\n(або залиште порожнім для завершення):");
        if (input === "") {
            break;
        }

        var number = parseInt(input);
        if (isNaN(number)) {
            alert("Некоректне значення, спробуйте ще раз.");
            continue;
        }

        array.push(number);
    } while (true);
    return array;
}

const makeArray = (firstArray, secondArray, maxLength) => {
    const newArray = [];
    let newLength = 0;
    for (let array of [firstArray, secondArray]) {
        for (let i = 0; i < array.length; i++) {
            if (newLength < maxLength) {
                newLength++;
                newArray.push(array[i]);
            }
            else {
                return newArray;
            }
        }
    }
    return newArray;
}

const buttonTask6 = document.getElementById("task-6");
buttonTask6.addEventListener("click", executeTask6);