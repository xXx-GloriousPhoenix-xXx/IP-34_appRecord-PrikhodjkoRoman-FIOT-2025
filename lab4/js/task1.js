const executeTask1 = () => {
    let time = prompt("Введіть час у форматі ГГ:ХХ");

    const pattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
    if (pattern.test(time)) {
        let [hour, minute] = time.split(":").map(Number);
        console.log("Години:", hour);

        var quarter = getHourQuarter(minute);
        alert(quarter);
    }
    else {
        console.log("Невірний формат часу");
    }
}

const getHourQuarter = (minutes) => {    
    if (1 <= minutes && minutes <= 15) {
        return "Перша чверть години";
    }
    else if (minutes <= 30) {
        return "Друга чверть години";
    }
    else if (minutes <= 45) {
        return "Третя чверть години";
    }
    else {
        return "Четверта чверть години";
    }
}

const buttonTask1 = document.getElementById("task-1");
buttonTask1.addEventListener("click", executeTask1);