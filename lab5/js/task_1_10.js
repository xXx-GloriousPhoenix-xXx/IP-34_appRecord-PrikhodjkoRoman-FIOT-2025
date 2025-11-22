const checkBrackets = (someFn) => {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of someFn) {
        if (brackets[char]) {
            stack.push(char);
        }
        else if (Object.values(brackets).includes(char)) {
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const executeTask_1_10 = () => {
    const fn = prompt('Введіть функцію:');
    console.log(fn);
    if (checkBrackets(fn)) {
        console.log('Дужки розставлені правильно.');
    } else {
        console.log('Дужки розставлені неправильно.');
    } 
}

document.getElementById('task-1-10').addEventListener('click', executeTask_1_10);