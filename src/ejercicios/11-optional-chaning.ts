
interface Pasajero{
    nombre:string;
    hijos?:string[];


}

const Pasajero1:Pasajero={
    nombre:"fernando"
}

const pasajero2:Pasajero={
    nombre:"melissa",
    hijos:["natalia","gabriel"]
}

function ImrimieHijos(Pasajero:Pasajero):void {
    const Cuantoshijos=Pasajero.hijos?.length || 0; //hijos? evalua si existen y si no el valor es 0

    console.log(Cuantoshijos);
}

ImrimieHijos(Pasajero1);