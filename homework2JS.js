let year = prompt("Введіть рік:");
let num = parseInt(year);


if (!isNaN(num) && num >= 1 && num <= 100) {

    let lastDigit = num % 10;
    
    let lastTwoDigits = num % 100;

    if (lastDigit === 1 && !(lastTwoDigits >= 11 && lastTwoDigits <= 19)) {
        console.log(num + " рік");
    } else if (lastDigit === 0 || (lastDigit >= 5 && lastDigit <= 9) || (lastTwoDigits >= 11 && lastTwoDigits <= 19)) {
        console.log(num + " років");
    } else {
        console.log(num + " роки");
    }
} else {
    console.log("Введено некоректне значення або число не знаходиться в діапазоні від 1 до 100");
}
