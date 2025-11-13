const executeTask8 = () => {
    let columns = parseInt(prompt("Введіть кількість стовпців матриці:"));
    if (isNaN(columns) || columns <= 0) {
        alert("Некоректна кількість стовпців.");
        return;
    }

    let rows = parseInt(prompt("Введіть кількість рядків матриці:"));
    if (isNaN(rows) || rows <= 0) {
        alert("Некоректна кількість рядків.");
        return;
    }

    const matrix = generateMatrix(columns, rows);
    console.log("Початкова матриця:", matrix);

    const firstElement = matrix[0][0];
    console.log("Перший елемент матриці:", firstElement);

    const lastElement = matrix[rows - 1][columns - 1];
    console.log("Останній елемент матриці:", lastElement);

    const firstRow = matrix[0];
    const updatedFirstRow = insertIntoArray(firstRow, 25, 2);
    console.log("Перший рядок після вставки:", updatedFirstRow);

}

const insertIntoArray = (array, element, position) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === position - 1) {
            newArray.push(element);
        }
        newArray.push(array[i]);
    }
    return newArray;
}

const generateMatrix = (columns, rows) => {
    const array = [];
    const min = -100;
    const max = 100;

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        array.push(row);
    }

    return array;
}

const buttonTask8 = document.getElementById("task-8");
buttonTask8.addEventListener("click", executeTask8);