const executeTask7 = () => {
    const arrayLength = parseInt(prompt("Введіть розмір масиву:"));
    if (isNaN(arrayLength) || arrayLength <= 0) {
        alert("Некоректний розмір масиву.");
        return;
    }

    const array = generateRandomArray(arrayLength);
    console.log("Початковий масив:", array);
    
    performSelectionSort(array);
    console.log("Відсортований масив:", array);
}

const performSelectionSort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) { 
        let minIndex = i; 
        for (let j = i + 1; j < n; j++) { 
            if (array[j] < array[minIndex]) { 
                minIndex = j; 
            } 
        } 
        if (minIndex !== i) { 
            const temp = array[i]; 
            array[i] = array[minIndex]; 
            array[minIndex] = temp; 
        } 
    }
}

const generateRandomArray = (length) => {
    const array = [];
    const min = -100;
    const max = 100;
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

const buttonTask7 = document.getElementById("task-7");
buttonTask7.addEventListener("click", executeTask7);