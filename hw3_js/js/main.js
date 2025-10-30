'use strict';

function addNewValue(){

    let value_Name = document.getElementById("value name").value;

    if(value_Name == ""){
        alert("Значение свойста не может быть пустым!");
        return;
    }

    let value = document.getElementById("value").value;

    if(value == ""){
        alert("Значение не может быть пустым!");
        return;
    }

    let profileElement = document.getElementById("profile");

    const emptyHeader = profileElement.querySelector(".empty-profile");
    if (emptyHeader) {
        emptyHeader.remove();
    }

    profileElement.innerHTML += `<p><b>${value_Name}:</b> ${value}</p><hr>`;

    document.getElementById("value name").value = "";
    document.getElementById("value").value = "";

}

function resetProfile() {

    let profileElement = document.getElementById("profile");

    profileElement.innerHTML = `
        <h4 style="margin-bottom: 10px;">Свойства профиля</h4>
        <h5 class="text-center empty-profile">Профиль пустой</h5>
    `;
}
