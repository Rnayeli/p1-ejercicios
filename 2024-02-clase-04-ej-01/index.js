//Declaro un Array vacio
let  foo = [];
const bar = [];

//Agrego elemntos en array

//Este no es en realidad el primer elemento, el primero es foo[0]
foo [1] = "Este es el primer elemento";
foo [2] = 123;

//Al definir foo[100], se llenan foo[3] al foo[99] con undefinded
foo [100] = "Este es el ultimo elemento";

//Una mejor forma de agregar elementos
bar.push("Pimer elemento");
bar.push(999);
bar.push(true);

//Intento copiar todos los elementos de bar en baz
let baz = bar;

//Ahora tengo 4 elementos en baz y bar
baz.push("Nuevo Elemento");