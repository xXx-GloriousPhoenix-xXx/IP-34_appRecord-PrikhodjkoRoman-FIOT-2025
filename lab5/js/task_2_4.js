const numbers = [1, 2, 3, 4, 5]

const squareArray = (array) => {
    return Array.from(array, x => x * x);
}

const executeTask_2_4 = () => {
    const squaredNumbers = squareArray(numbers);
    console.log("Початковий масив:", numbers);
    console.log("Масив з квадратами чисел:", squaredNumbers);
}

document.getElementById("task-2-4").addEventListener("click", executeTask_2_4);