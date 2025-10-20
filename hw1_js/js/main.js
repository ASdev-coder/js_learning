'use strict';

function calculate(){

    let output = document.getElementById('result');

    let number1 = document.getElementById("number1").value;
    let valid = validateInput(number1);

    if (!valid){
        output.innerHTML = `<h4 class="card-title text-danger"  id="result">Значения числа 1 не корректно!</h4>`;
        return;
    }
    number1 = parseFloat(number1);

    let number2 = document.getElementById("number2").value;
    valid = validateInput(number2);

    if (!valid){
        output.innerHTML = `<h4 class="card-title text-danger"  id="result">Значения числа 2 не корректно!</h4>`;
        return;
    }
    number2 = parseFloat(number2);

    let operation = document.getElementById("opInput").value;

    let result;

    switch (operation) {
        case "+":
            result = number1 + number2;
            output.innerHTML = `<h4 class="card-title text-success" id="result">${number1} + ${number2} = ${result}</h4>`;
            break;
        case "-":
            result = number1 - number2;
            output.innerHTML = `<h4 class="card-title text-success" id="result">${number1} - ${number2} = ${result}</h4>`;
            break;
        case "*":
            result = number1 * number2;
            output.innerHTML = `<h4 class="card-title text-success" id="result">${number1} * ${number2} = ${result}</h4>`;
            break;
        case "/":
            result = number1 / number2;
            output.innerHTML = `<h4 class="card-title text-success" id="result">${number1} / ${number2} = ${result}</h4>`;
            break;
        default:
            output.innerHTML = `<h4 class="card-title text-danger" id="result">Операция не поддерживается!</h4>`;
            return;
    }
}

function validateInput(inputElement){
    // Берём значение из input и убираем пробелы
    let str = inputElement.trim();

    // Проверяем, что строка полностью состоит из числа (целого или дробного)
    if (/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(str)) {
        return true; // Всё ок
    } else {
        return false; // не число
    }
}
