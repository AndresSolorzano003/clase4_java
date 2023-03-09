//Funcion tipo flecha 
let sumar =(number) => {return number +5;}
//Asigno una funcion a f
/*Funciones asignadas a una variable */ 
let f=sumar;
//Muestro la variable 
console.log(f(5)); //usando f
console.log(sumar(5)); //usando sumar


/*Callback functions

Se trata de enviarle como parametro de entrada una funcion a 
otra funcion

*/

const esPar =(numero) =>{
    return numero%2==0; //me regresa un bool
}

const verificar =(numero,callbackFn/*como 2do paramaetro va una funcion*/ ) =>{
    //Aqui tengo que usar la funcion y el numero

    const esPar =callbackFn(numero);
    console.log("el número : " +numero +" es "+ esPar)
}

verificar(9,esPar)

//otro ejemplo 

const dividepo2 = (numero)=> {return numero/2} 
const dividenumero =(numero,callbackFn)=>{
    return callbackFn(numero);
}
console.log( dividenumero(10,dividepo2));

/*Metodos para arreglos*/

const numeros=[1,2,3,20,893,452];
let numetos2=[1,2,3,20,893,452];

//                                                    .preduce (Primer metodo)
//reduce todos los valors a uno solo

//Esto es un vector que tiene unos valores y los voy a sumar todos 
const sumaValores = numeros.reduce((acumulador,valorActual)=>{
    return acumulador + valorActual;
});

console.log(sumaValores);

//                                                .forEach()

const fndos= numetos2.forEach(number =>{
     
    console.log(number);
   
})

//                                                   .filter()

const fntres= numetos2.filter(number =>{
    //como voy a filtar, nosotros ponemos la condicion 
    return number > 10;
})

console.log(fntres);

//                                                  .map()

const nombresperosnas =["juan","andres","ana","maria","jose","mariano","susana"];
const anuncios =numetos2.map(miembro =>{
    return miembro *3-3;
})

console.log(anuncios);




 // Actividad 

 
/*const esPar =(numero) =>{
    return numero%2==0; //me regresa un bool
}



const verificar =(numero,callbackFn/*como 2do paramaetro va una funcion*/ /*) =>{
    //Aqui tengo que usar la funcion y el numero

    const esPar =callbackFn(numero);
    console.log("el número : " +numero +" es "+ esPar)
}*/


/*actividad 1*/

const vector=[4,3,23,1,893,452,234,2,54];
console.log("funcion 1");
const fnac2= vector.forEach(number =>{
     
     suma= ((number*3)/2); 
    console.log(suma);
   
})


// actividad 2
console.log("funcion 2");


const fn2= vector.filter(number =>{
    //como voy a filtar, nosotros ponemos la condicion 
    
    return number%2==0; ;
})

console.log(fn2);

// actividad 3

console.log("funcion 3");

const fn3 =vector.map(number =>{
    return ((number *3)*2);
})

console.log(fn3);




