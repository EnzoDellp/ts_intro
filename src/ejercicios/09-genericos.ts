
//GENERICOS


//? para espeficiar un generico usamos <T>, para que reciba valores de cualquier tipo
function queTipoSoy <T> (argumento: T):string{
    return (argumento).toString();
}


let soyString=queTipoSoy("Hola Mundo");

let soyNumber=queTipoSoy(50);

let soyArreglo=queTipoSoy([1,2,3,4]);

let SoyExplicito =queTipoSoy<number>(100);




