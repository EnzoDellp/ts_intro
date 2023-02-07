/*
    ===== Código de TypeScript =====
*/


interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion,
    mostrarDireccion:()=>string;
    
    
}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string
}

const SuperHeroe:SuperHeroe ={
    nombre:"Spierman",
    edad:30,
    direccion:{
        calle:"Main S",
        pais:"USA",
        ciudad:"NY",

    },
    mostrarDireccion(){
        return this.nombre + ", "+ this.direccion.ciudad + ", " + this.direccion.pais;

    }
}

const direccion=SuperHeroe.mostrarDireccion();

console.log(direccion);


