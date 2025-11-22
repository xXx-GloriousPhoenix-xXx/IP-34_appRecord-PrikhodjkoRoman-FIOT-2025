const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const sortAscendingByAge = () => {
    return users.slice().sort((a, b) => a.age - b.age);
}

const executeTask_2_6 = () => {
    console.log("Початковий масив користувачів:", users);
    const sortedUsers = sortAscendingByAge();
    console.log("Відсортований масив користувачів за віком (за зростанням):", sortedUsers);
}

document.getElementById("task-2-6").addEventListener("click", executeTask_2_6);