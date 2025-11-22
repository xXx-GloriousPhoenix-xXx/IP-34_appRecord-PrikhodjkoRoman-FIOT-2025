const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 }
];

const executeTask_1_6 = () => {
    const discountMedicines = medicines
    .map((m, id) => {
        return {
            id: id + 1,
            name: m.name,
            price: m.price - (m.price > 300 ? 0.3 * m.price : 0)
        };
    });
    console.log("Оновлений список ліків:", discountMedicines);
}

document.getElementById("task-1-6").addEventListener("click", executeTask_1_6);