const executeTask_1_2 = () => {
    const id = parseInt(prompt("Введіть ID продукту"));
    if (isNaN(id) || id <= 0) {
        console.log("Некоректний ID продукту");
        return;
    }
    getProductDetails(id, successFunction, errorFunction);
}

const getProductDetails = (productId, successCallback, errorCallback) => {
    const product = productData[productId];
    if (product) {
        successCallback(product);
    }
    else {
        errorCallback();
    }
}

const successFunction = (product) => {
    const data = Object.keys(product)
        .map(key => `${key}: ${product[key]}`)
        .join('\n');
    console.log(data);
}

const errorFunction = () => {
    console.log("Product not found");
}

const productData = {
    1: { name: "Laptop", price: 999.99, stock: 25 },
    2: { name: "Smartphone", price: 499.99, stock: 50 },
    3: { name: "Tablet", price: 299.99, stock: 30 }
}

document.getElementById("task-1-2").addEventListener("click", executeTask_1_2);