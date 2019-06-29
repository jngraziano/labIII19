/// <reference path="../clases/Vehiculo.ts" />
// /// <reference path="../clases/Auto.ts" />


namespace segundoParcial{

    export class Camioneta extends Vehiculo{
       
       
        protected cuatroXcuatro:boolean;
      
    
        constructor(marca:string, modelo:string,precio:any,id:number, cuatroXCuatro:boolean) {
           super(marca,modelo,precio,id,"CAMIONETA");
            this.cuatroXcuatro=cuatroXCuatro;
           
        }
    
     
    
        
    }


}