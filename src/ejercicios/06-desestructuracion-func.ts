
export interface Producto{
    desc:string;
    precio:number;

}

const Telefono: Producto={
    desc:"Nokia A1",
    precio:150,
}
const tableta: Producto={
    desc:"iPad Air",
    precio:350,
}

export function calculaISV(productos:Producto[]):[number,number] {
    let total=0;
    productos.forEach( ({precio})=>{
        total+= precio;
    })
    
    return [total,total*0.15];
}

// const articulos=[Telefono,tableta];
// const [total,isv]=calculaISV(articulos);

// console.log("total: ",total);
// console.log("ISV: ",isv);