console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('done!');
}
/* Условие выполнится. Правая часть true */

{
    let hamburger;
    const cola = 0;
    const fries = NaN;
    const nuggets = 2;

    if (hamburger || cola || fries === 3 || nuggets) {
        console.log('done!');
    }
    /* Условие выполнится. Хотя бы одно значение true(nuggets)*/
}

{
    let hamburger;
    const fries = NaN;
    const cola = 0;
    const nuggets = 2;

    if (hamburger && cola || fries === 3 && nuggets) {
        console.log('done!');
    }
    /* ИЛИ. обе части false, блок кода не отработает */
}