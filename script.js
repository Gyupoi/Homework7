const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);



function filterByStart(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}



const num = 32.58884;

const floorValue = Math.floor(num);
console.log(floorValue);

const ceilValue = Math.ceil(num);
console.log(ceilValue);

const roundValue = Math.round(num);
console.log(roundValue);



const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Минимальное значение:', min);
console.log('Максимальное значение:', max);



function random1to10() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

random1to10();



function generateRandomArray(n) {
    const length = Math.floor(n / 2);
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }

    return result;
}



function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const today = new Date();
console.log(today);



const currentDate = new Date();
console.log('Текущая дата:', currentDate);

const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate);



const formatDateRussian = d => {
    const m = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const w = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const pad = n => String(n).padStart(2, '0');
    return `Дата: ${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()} — это ${w[d.getDay()]}.\nВремя: ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

console.log(formatDateRussian(new Date()));
