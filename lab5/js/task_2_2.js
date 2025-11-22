const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const defineIsLessThan20 = () => {
    return people.some(person => person.age < 20);
}

const executeTask_2_2 = () => {
    const result = defineIsLessThan20();
    if (result) {
        console.log("Так, є людина молодша за 20 років");
    }
    else {
        console.log("Ні, немає людей молодших за 20 років");
    }
}

document.getElementById('task-2-2').addEventListener('click', executeTask_2_2);