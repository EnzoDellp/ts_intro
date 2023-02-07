/*
    ===== Código de TypeScript =====
*/

//arrys

let habilidades : string[]= ["bash","counter","healing"];

//interfaces

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;

}

//objetos

const Personaje:Personaje={
    nombre:"strinder",
    hp:100,
    habilidades:["bash","counter","healing"]
}

Personaje.puebloNatal="Pueblo plaeta";

console.table(Personaje);