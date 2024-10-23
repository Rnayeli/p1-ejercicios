"use strict";

let ciudad, sexo, edad;
let datoValido = true;

//Validacion de ciudad
do{
    ciudad = prompt("Ingrese la ciudad");
    if(!isNaN(ciudad)) {
        alert("Ingrese texto, no numeros");
        datoValido = false;
    }
    else if(ciudad === null) {
        alert("Por favor, complete el campo");
        datoValido = false;
    }
    else if(ciudad.trim() === "") {
        alert("No dejar el prompt vacio");
        datoValido = false;
    }
    else {
        datoValido = true;
    }

} while(!datoValido);

//validamos sexo

do{
    sexo = prompt("Ingrese el sexo (H, M, X)");
    if(!isNaN(sexo)) {
        alert("Ingrese texto, no numeros");
        datoValido = false;
    }
    else if(sexo === null) {
        alert("Por favor, complete el campo");
        datoValido = false;
    }
    else if(sexo.trim() === "") {
        alert("No dejar el prompt vacio");
        datoValido = false;
    }
    else if(sexo.toLowerCase() !== "h" && sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "x") {
        alert("Complete con una opcion valida (H, M, X)");
        datoValido = false;
    }
    else{
        datoValido = true;
    }
} while(!datoValido);

//validamos edad

do{
    edad = parseInt(prompt("Ingrese una edad entre 0 y 110"));

    if(isNaN(edad)) {
        alert("Ingrese numeros");
        datoValido = false;
    }

    else if(edad < 0 || edad > 110) {
        alert("Edad fuera de rango. Ingrese entre 0 y 110");
        datoValido = false;
    }
    else{
        datoValido = true;
    }
} while(!datoValido);