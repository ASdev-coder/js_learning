'use strict';

function comparison(){
    let first_value = document.getElementById("value1").value;
    let second_value = document.getElementById("value2").value;
    let result = document.getElementById("result");

    if(first_value == "" | second_value == ""){
        result.innerHTML = "<p class='text-danger''><b>Ошибка! Введите два значения</b></p>";
        return;
    }

    printResult(first_value, second_value, result);
}

function printResult(value, second_value, result){
    result.classList.add("text-start");
    result.innerHTML = `
                            <p style="width: 90%"> <b>Нестрогое сравнение (${value} == ${second_value}):</b> ${value == second_value} </p>
                            <p style="width: 90%"> <b>Cтрогое сравнение (${value} === ${second_value}):</b> ${value === second_value} </p>
                            <p style="width: 90%"> <b>Cравнение чисел (Number(${value}) > Number(${second_value})):</b> ${Number(value) > Number(second_value)} </p>
                            <p style="width: 90%"> <b>Сравнение строк (${value} > ${second_value}):</b> ${value > second_value} </p>
                        `
}