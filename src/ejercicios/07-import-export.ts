import { calculaISV, Producto } from ".//06-desestructuracion-func";


const carritoCompras:Producto[]=[
    {
        desc:"telefono 1",
        precio:100
    },
    {
        desc:"telefono 2",
        precio:150
    }
];

const[total,isv]=calculaISV(carritoCompras);

console.log("total ",total)
console.log("isv ",isv)