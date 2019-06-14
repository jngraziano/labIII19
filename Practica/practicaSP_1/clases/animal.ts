namespace practicaSP{

    export abstract class animal {
       
        nombre:string;
        cantPatas:number;
        tipo:any;
    
        constructor(Nombre:string,cantidadP:number, tipo:string) {
          
            this.nombre=Nombre;
            this.cantPatas=cantidadP;
            this.tipo=tipo;
        }
    
        // abstract haceRuido(input : string) : string;
    
        
    }


}




