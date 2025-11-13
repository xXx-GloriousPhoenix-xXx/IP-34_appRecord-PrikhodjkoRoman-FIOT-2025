const executeTask4 = () => {
    let country = prompt("Введість країну для доставки:");

    let price = parseInt(prompt("Введість вартість товару:"));
    if (isNaN(price)) {
        alert("Некоректна вартість товару");
        return;
    }
    
    let deliveryFee = parseInt(prompt("Введість вартість доставки:"));
    if (isNaN(deliveryFee)) {
        alert("Некоректна вартість доставки");
        return;
    }

    let message = getShippingMessage(country, price, deliveryFee);
    console.log(message);
}

const getShippingMessage = (country, price, deliveryFee) => {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

const buttonTask4 = document.getElementById("task-4");
buttonTask4.addEventListener("click", executeTask4);