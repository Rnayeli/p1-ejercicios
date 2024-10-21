//pido datos por promt
let categoria = parseInt (prompt("ingrese categoria (1,2 o 3) para salarios usd 1000, usd 1500 y usd 2000"));
let subcategoria = prompt("Elija la subcategoria (A, B O C) para multiplicadores de 1.5, 2 y 2.5");

let sueldo;
//Asigno sueldo segun la categoria
if(categoria == 1) {
    sueldo = 1000;
}
else if (categoria == 2) {
    sueldo = 1500;
}
else {
    sueldo = 2000;
}

alert(`El sueldo es de ${sueldo}`);