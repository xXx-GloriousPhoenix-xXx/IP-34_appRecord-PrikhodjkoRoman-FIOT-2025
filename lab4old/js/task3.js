const executeTask3 = () => {
    const loginPattern = /^User\d+$/;
    const passwordPattern = /^[A-Za-z]+$/;

    let login = "";
    do {
        login = prompt("Введіть логін: ");
        if (login === null) {
            continue
        }
        if (!loginPattern.test(login)) {
            alert("Введіть коректний логін.");
            continue;
        }
        break;
    } while (true);

    if (!checkUserExists(login)) {
        alert("I don't know you.");
        return;
    }

    let password = "";
    do {
        password = prompt("Введіть пароль: ");
        if (password === null) {
            continue;
        }
        if (!passwordPattern.test(password)) {
            alert("Введіть коректний пароль.");
            continue;
        }
        break;
    } while (true);

    if (!verifyCredentials(login, password)) {
        alert("I don't know you");
        return;
    }

    alert(`Hello, ${login}`);
}

const checkUserExists = (login) => {
    return credentials.has(login);
}
const verifyCredentials = (login, password) => {
    return credentials.get(login) === password;
}

const credentials = new Map();
credentials.set("User1", "a");
credentials.set("User2", "b");
credentials.set("User3", "c");

const buttonTask3 = document.getElementById("task-3");
buttonTask3.addEventListener("click", executeTask3);