/* Заполнить новый массив(result) из старого(arr). Количество элементов в массиве
можно получить как arr.length, а к элементам обращаемся так же: arr[1], arr[2] и т.д.
должен получиться точно такой же массив*/
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

/* Измените данный массив так, чтобы все числа были увеличены в 2 раза,
а если попадётся строка - то к ней было добавлено - done; 
Для определения типа данных используйте typeof()
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]*/
function secondTask() {
    /* значения массива менять нельзя, тут от проверяется автоматически
    именно на эти значения */
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if(typeof(data[i]) === 'string') {
            data[i] += ' - done';
        } else if(Number.isInteger(data[i])) {
            data[i] *= 2;
        }
    }
    console.log(data);

    return data;
}

/* Разверните массив data наоборот при помощи цикла и запишите данные в массив result 
Должно получиться: ['Homework', 20. 'Shopping', 10, 5] */
function thirdTask() {
    /* значения массива менять нельзя, тут от проверяется автоматически
    именно на эти значения */
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0; i < data.length; i++){
        result[i] = data[(data.length - 1) - i];
     }
     console.log(result);

    return result;
}