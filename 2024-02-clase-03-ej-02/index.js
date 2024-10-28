//Variable global
let numero1, numero2, suma;

/**
 * Funcion que atiende el click para pedir el primer numero
 */
function pedirNumero1() {
    //Variable local para validar, solo existe en la funcion luego deja de existir
    numero1 = validarNumero("Ingrese el primer numero");
}

/**
 * Funcion que atiende el click para pedir el segundo numero
 */
function pedirNumero2() {
    //Variable local para validar, solo existe en la funcion luego deja de existir
    numero2 = validarNumero("Ingrese el segundo numero");
}

/**
 * Funcion que sume los dos numeros pedidos
 */
function sumar() {
    suma = numero1 + numero2;
}

/**
 * Funcion que muestra el resultado de la suma
 */
function resultado() {
    alert(`El resultado de la suma ${numero1} + ${numero2} es ${suma}`);
}

/**
 * Funcion que es encargada de pedir y validar un numero
 * @param {string} msg mensaje que aparece en el promt
 * @returns numero validado, que nos devuelve
 */
function validarNumero(msg = "") {
    //Variable local para validar
    let numero;
    do{
        numero = parseInt(prompt(msg));

        if(isNaN(numero)){
            alert("Solo se aceptan numeros");
        }
    }while(isNaN(numero));

    //Retorno numero validado a quien lo solicitado
    return numero;

    //Este mensaje nunca aparece porque se corta en seco la funcion con el returm
    alert("Mensaje post return");
}