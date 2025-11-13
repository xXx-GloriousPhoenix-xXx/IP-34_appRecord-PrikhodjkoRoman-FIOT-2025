const executeTask5 = () => {
    let quantity = parseInt(prompt("Введіть кількість дроідів:"));
    if (isNaN(quantity) || quantity < 0) {
        alert("Некоректна кількість дроідів");
        return;
    }

    let pricePerDroid = parseInt(prompt("Введіть ціну за один дроїд:"));
    if (isNaN(pricePerDroid) || pricePerDroid < 0) {
        alert("Некоректна ціна за дроїд");
        return;
    }

    let customerCredits = parseInt(prompt("Введіть кількість кредитів у покупця:"));
    if (isNaN(customerCredits) || customerCredits < 0) {
        alert("Некоректна кількість кредитів");
        return;
    }

    let message = makeTransaction(quantity, pricePerDroid, customerCredits);
    console.log(message);
}

const makeTransaction = (quantity, pricePerDroid, customerCredits) => {
    const totalPrice = quantity * pricePerDroid;
    if (customerCredits < totalPrice) {
        return "Insufficient funds!";
    }
    else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!"`;
    }
}

const buttonTask5 = document.getElementById("task-5");
buttonTask5.addEventListener("click", executeTask5);