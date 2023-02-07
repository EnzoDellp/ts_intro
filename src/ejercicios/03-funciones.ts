/*
    ===== Código de TypeScript =====
*/

//funciones

function sumar(a:number,b:number):number{
    return (a+b);
}
//arrow function
const sumerFlecha=(a:number,b:number):number=>{
    return a+b;
}

function multiplicar(numero:number,otroNumero?:number,base:number=2):number{
    return numero * base;
}

// const resultado=sumar(5,5);
// const resultado=multiplicar(5,0,10);


// console.log(resultado);

//interface

interface personajeLOR{
    nombre:string;
    pv:number;
    mostrarHp:()=>void;
}

function Curar(personaje:personajeLOR,curarX:number ):void{

    personaje.pv+=curarX;

    console.log(personaje);
}

const nuvoPersonaje:personajeLOR={

    nombre:"strider",
    pv:50,
    mostrarHp(){
        console.log("Puntos de vida",this.pv)
    }
}
Curar(nuvoPersonaje,20);

nuvoPersonaje.mostrarHp();