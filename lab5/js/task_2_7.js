class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    number(value) {
        this.currentValue = value;
        return this;
    }

    getResult() {
        return this.currentValue;
    }

    add(value) {
        this.currentValue += value;
        return this;
    }

    subtract(value) {
        this.currentValue -= value;
        return this;
    }

    multiply(value) {
        this.currentValue *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.currentValue /= value;
        return this;
    }

    power(value) {
        this.currentValue **= value;
        return this;
    }
}

const executeTask_2_7 = () => {
    try {
        const operation = prompt("Введіть послідовність операцій\nНаприклад: new Calculator().number(10).add(5).subtract(3)");
        
        if (!operation) {
            alert("Операція не введена");
            return;
        }

        const result = eval(operation).getResult();
        
        alert(`Результат: ${result}`);
        
    } catch (error) {
        alert(`Помилка: ${error.message}`);
    }

}

document.getElementById("task-2-7").addEventListener("click", executeTask_2_7);