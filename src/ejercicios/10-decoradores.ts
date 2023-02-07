//decoradores

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newPoroperty="new Property";
      hello="override";
    };
  }




@reportableClassDecorator
class MiSuperClase{
    public miPropiedad:string="abc123";

    imprimir(){
        console.log("Hola Mindo");
    }
}

console.log(MiSuperClase);

const miClase=new MiSuperClase();

console.log(miClase.miPropiedad);