
//desestructuracion de objetos

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor :Reproductor={
  volumen:90,
  segundo:36,
  cancion:"Mess",
  detalles:{
    autor:"Ed Sherran",
    anio:2001,
  }  
}

//*sin desestroturacion
// console.log("El volumen actual es de: ",reproductor.volumen);
// console.log("El segundo actual es de: ",reproductor.segundo);
// console.log("La cancion actual es: ",reproductor.cancion);
// console.log("El autor es: ",reproductor.detalles.autor);


//* desestructuracion
const {volumen,segundo,cancion,detalles:{anio,autor:autorDetalle}}=reproductor; //toma el objeto y dentro de los parentesis ponemos las propiedaes que nos interesan

//* desestructuracion a detalles
// const{autor,anio}=detalles;





//*aplicada la desestroturacion

// console.log("El volumen actual es de: ",volumen);
// console.log("El segundo actual es de: ",segundo);
// console.log("La cancion actual es: ",cancion);

// console.log("El autor es: ",autorDetalle);


//* desestructuracion arrays

const dbz:string[]=["goku","vegetta","trunks"];
const [p1,,p3]=dbz;
console.log("personaje 1:" ,p1);
console.log("personaje 2:" ,);
console.log("personaje 3:" ,p3);




