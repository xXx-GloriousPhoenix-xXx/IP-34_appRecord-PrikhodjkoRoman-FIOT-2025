const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const executeTask_1_4 = () => {
    const input = prompt("Введіть дату у форматі ДД/ММ/РРРР:");
    const pattern = /^(?:(?:(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])|(?:29|30)\/(?:0[13-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/\d{4}|29\/02\/(?:\d{2}(?:0[48]|[2468][048]|[13579][26])|(?:[02468][048]|[13579][26])00))$/;
    if (!pattern.test(input)) {
        alert("Невірний формат дати.");
        return;
    }
    const [day, month, year] = input.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    const concertsArray = Object.entries(concerts).map(([city, date]) => ({ city, date }));
    const outdatedConcertCityNames = concertsArray
    .filter(c => c.date < date)
    .sort((a, b) => a.date - b.date)
    .map(c => c.city);

    console.log("Міста з концертами до введеної дати:", outdatedConcertCityNames);
}

document.getElementById("task-1-4").addEventListener("click", executeTask_1_4);