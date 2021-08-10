// console.log('hola');

//Ejercicio 1
let numeros = [1, 5, 7, 12, 89, 23];

let dobles = numeros.map(function(numero){
    //console.log(numero);
    return numero*2
})
let doblesArrow = numeros.map( numero => {
    //console.log(numero);
    return numero*2 
    })

//console.log(dobles);
//console.log(doblesArrow);

let numeroAString = numeros.map( numero => numero.toString())
console.log(numeroAString);

//Ejercicio 3
let nombres = ['franco', 'martina', 'leonardo', 'jose', 'lucia', 'josefina'];

let nombresEnMayuscula = nombres.map( nombre => nombre.toUpperCase())
console.log(nombresEnMayuscula);


let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombres = personas.map( function(persona){
    return {
        nombre: persona.nombre
    }
});

let soloNombresArrow = personas.map( persona => {
    return {
        nombre: persona.nombre
    }
});


console.log(soloNombresArrow);