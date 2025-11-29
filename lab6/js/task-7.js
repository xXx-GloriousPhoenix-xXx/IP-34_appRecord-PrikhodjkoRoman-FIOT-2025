const categoryList = document.getElementById("categories");
const countButton = document.getElementById("count-button");

class Count {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }

    read() {
        return `${this.name}: ${this.count}`;
    }
}

const count = () => {
    const categories = categoryList.querySelectorAll("li.item");
    const stats = [];

    for (let category of categories) {
        const name = category.querySelector("h3").textContent;
        const itemsCount = category.querySelectorAll("ul li").length;
        stats.push(new Count(name, itemsCount));
    }

    stats.push(new Count("Categories in total", categories.length));

    return stats;
}

countButton.addEventListener("click", () => {
    const result = count();
    for (let record of result) {
        console.log(record.read());
    }
});