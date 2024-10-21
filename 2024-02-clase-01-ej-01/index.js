//pide dos extremos para comparar
const max = parseInt(prompt("ingrese el maximo para comparar"));
const min = parseInt(prompt("ingrese el minimo para comparar"));

//Pide el numero para comparar (utilizo const para que no se pueda modificar la variable)
const num = parseInt(prompt("Ingrese el numero a comparar"));

//Verifico si el numero esta en rango (con una condicion) 
//la condicion seria, si el numero es mayor al minimo y si el numero es menor al maximo, ambos tienen que ser verdaderos para que se cumpla todas las condiciones
if(num >= min && num <= max) {
    //Entra aca solo si esta entre el maximo y el minimo
    alert("El numero esta en rango");
}
else {
    alert("El numero no esta en rango");
}

//Preguntar si es par 
//El % resuelve la operacion, dividiendo el numero con 2 pero solo me devuelvo el resto que puede ser 0 (que significa que es PAR sino es IMPAR)

if(num % 2 == 1) {
    //Es impar por que tiene resto 1
    alert ("El numero es impar");
}
else { 
    //Es par por que el resto fue 0
    alert ("El numero es par")
}



//otra forma de resolverlo

//Preguntar primero si es mayor al minimo
if(num >= min) {
    //Si lo anterior es verdad, hacemos la otra pregunta
    //si el numero en menor al maximo
    if(num <= max) { 
        //esta en rango
    }
    else {
    //No esta en rango
    }
}
else {
    //No esta en rango
}
