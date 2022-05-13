/* ЗАДАЧА НА ФОРМИРОВАНИЕ ФИГУРЫ
Проверяется именно переменная result, формируйте строку в ней 
ПОДСКАЗКА: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах.
*/
const lines = 5;
let result = '';

/* Высчитывает количество символов в последней строке */
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);