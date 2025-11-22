class Storage {
    constructor(items) {
        this.items = items;
        console.log("Початковий перелік товарів:", this.items);
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Товар "${item}" додано.`);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Товар "${item}" видалено.`);
        }
    }

    createItem() {
        const newItem = prompt("Введіть ім'я нового товару:");
        if (newItem) {
            console.log(`Створено новий товар: "${newItem}"`);
            return newItem;
        }
    }
}

const executeTask_1_8 = () => {
    const length = parseInt(prompt("Введіть початкову довжину масиву:"));
    if (isNaN(length) || length <= 0) {
        console.log("Некоректна довжина масиву.");
        return;
    }
    
    storage = new Storage([]);
    for (let i = 0; i < length; i++) {
        let item = storage.createItem();
        storage.addItem(item);
    }

    console.log("Перелік товарів:", storage.getItems());
}

document.getElementById("task-1-8").addEventListener("click", executeTask_1_8);