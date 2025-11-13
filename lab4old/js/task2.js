const executeTask2 = () => {
    let dayNumber = parseInt(prompt("Введіть номер дня тижня від 1 до 7:"));
    if (isNaN(dayNumber)) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }
    let = finish = getDayName(dayNumber);
    console.log("День: " + finish);
}

const getDayName = (dayNumber) => {
    switch(dayNumber) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return "Некоректний номер дня";    
    }
}

const buttonTask2 = document.getElementById("task-2");
buttonTask2.addEventListener("click", executeTask2);