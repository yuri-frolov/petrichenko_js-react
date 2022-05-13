// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой.
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    } 
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. Когда дойдёт до 13ти - остановить весь цикл
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    } 
}

// При помощи цикла for вывести чётные числа от 2 до 10 включительно
function thirdTask() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// перепишите цикл for на вариант с while. Результат должен остаться точно таким же.

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    /* цикл, переписанный на while */
    let i = 2;
    while (i <= 16){
        if (i % 2 !== 0) {
            console.log(i);
        }
        i += 1;
    }
    
    
}

/*  Заполните массив цифрами от 5 до 10 включительно.
    Помнить о том, что элементы массива можно сформировать так же,
    как и обращаться к ним: arr[0] */

function fifthTask() {
    let arrayOfNumbers = [];

    for (let i = 0; i <= 10; i++) {
        if (i >=5) {
            arrayOfNumbers.push(i);
        }        
    }
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}