//quiero que esto se repita varias veces para eso usamos un bucle

//BUCLES
//while () {
    //lo que se repite
//}

//for(){
    //lo que se repite
//}

//ESTOS SON LOS CONTADORES
let = contadorDesaprobados = 0, contadorAprobados = 0, contadorPromocionados = 0; //Camelcase - formas de escribir una variable
//let = AcumuladoresDesaprobados, AcumuladorAprobados, AcumuladorPromocionados; //Pascalcase - formas de escribir una variable

//ESTOS SON LOS ACUMULADORES
let = acumuladorDesaprobado = 0, acumuladorAprobados = 0, acumuladorPromocionados = 0;

//Variable para nota maxima y minima
let = maxNota = 1, minNota = 10;

do{
    //lo que se repite
    let nota = parseInt(prompt("Ingrese una nota (1 al 10)"));

    //Empiezo a preguntar
    if (nota < 4){
        //Desaprobado
        contadorDesaprobados = contadorDesaprobados + 1;
        acumuladorDesaprobado = acumuladorDesaprobado + nota;
    }
    else{
        //Aprobado
        contadorAprobados++; //sintaxis mas corto pero es igual a la de desaprobados
        acumuladorAprobados += nota; //sintaxis mas corto pero es igual a la de desaprobados

        //Pregunto si ademas, promociono
        if (nota >= 7){
            //Si, prmociono tambien
            contadorPromocionados++;
            acumuladorPromocionados += nota;
        }
    }

    //Pregunto si la nuevo nota es mayor a la anterior
    if (nota > maxNota){
        //Si es asi, encontre un nuevo maximo
        maxNota = nota;
    }
    //Pregunto si la nuevo nota es menor a la anterior
    if (nota < minNota){
        //Si es asi, encontre un nuevo minimo
        minNota = nota;
    }

} while(confirm("Otra nota?"));

//una vez que se cargaron las notas, sacamos los promedios
alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobado / contadorDesaprobados).toFixed(1)}`);
alert(`Hubo ${contadorAprobados} alumnos desaprobados y su nota promedio fue de ${(acumuladorAprobados / contadorAprobados).toFixed(1)}`);
alert(`Hubo ${contadorPromocionados} alumnos desaprobados y su nota promedio fue de ${(acumuladorPromocionados / contadorPromocionados).toFixed(1)}`);

alert(`La nota minima del curso fue ${minNota}`);
alert(`La nota maxima del curso fue ${maxNota}`);