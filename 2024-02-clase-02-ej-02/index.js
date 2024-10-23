"use strict";

let ciudad, sexo, edad;
let datoValido = true;

//Variables para promedios
let contadorMujeres = 0, contadorGeneral = 0, contadorHombres = 0, contadorNoBinario = 0;
let acumuladorEdadMujeres = 0, acumuladorEdadGeneral = 0, acumuladorEdadHombres = 0, acumuladorEdadNoBinario = 0;

//Variables para porcentajes
let contadorMujeresMenores21 = 0, contadorHombresMayores21 = 0;

//Variables para maximo y minimo de edad
let edadHombreMax = 0, edadMujerMin = 110;

do{
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

    //aca ya esta todo validado

    //siempre incremento el contador general
    contadorGeneral++;
    acumuladorEdadGeneral += edad;

    if(sexo.toLowerCase() === "h") {
        //Es hombre
        contadorHombres++;
        acumuladorEdadHombres += edad;
        //veo si cumple con el requisito de edad
        if(edad > 21){
            contadorHombresMayores21++;
        }
    }
   
    else {
        //Es no binario
        contadorNoBinario++;
        acumuladorEdadNoBinario += edad;
    }
} while(confirm("Otro dato?"));
