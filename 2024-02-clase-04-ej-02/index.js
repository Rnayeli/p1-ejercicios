//Pido el nombre del alumno
const alumno = validarString("Ingrese el nombre del alumno");

do{
    //Pido materia y valido
    let materia = validarString("Ingrese el nombre de la materia");
    //Pido nota y valido
    let nota = validarNota(`Ingrese la nota de final de ${materia}`);

} while(confirm("Otra materia y nota para cargar?"));

/**
 * Pide y valida un string
 * @param {string} msg 
 * @returns un string validado
 */

function validarString(msg = "") {

    //Booleano para validar
    let datoValido;
    //Varible auxiliar
    let foo;
    do{
        //Pido y valido el nombre de la materia
        foo = prompt(msg);

        //Valido que no sea un numero
        if(!isNaN(foo)) {
            alert("Ingrese texto");
            datoValido = false;
        }
        else if(foo === null) {
            alert("Por favor, complete el campo");
            datoValido = false;
        }
        else if(foo.trim() === "") {
            alert("Por favor, no deje el campo vacio");
            datoValido = false;
        }
        else {
            datoValido = true;
        }
    } while(!datoValido);

    //Devuelvo el dato valido
    return foo;
}

/**
 * Pide y valida una nota
 * @param {string} msg 
 * @returns nota validad entre 4 y 10
 */
function validarNota(msg = ""){

    //Booleano para validar
    let datoValido;
    //Varible auxiliar
    let foo;

    do{
        foo = parseInt(prompt());
        //Validaciones
        if(isNaN(nota)) {
            alert("Por favor ingrese numeros")
            datoValido = false;
        }
        else if (foo < 4 || foo > 10) {
            alert("La nota debe ser entre 4 y 10");
            datoValido = false;
        }
        else{
            datoValido = true;
        }

    } while(!datoValido);

    //Devuelvo el dato valido
    return foo;
}