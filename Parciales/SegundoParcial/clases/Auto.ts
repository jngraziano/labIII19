/// <reference path="../clases/Vehiculo.ts" />
// /// <reference path="../clases/Camioneta.ts" />


namespace segundoParcial{

    export class Auto extends Vehiculo {
       
       
        protected cantPuert:number;
      
    
        constructor(marca:string, modelo:string,precio:any,id:number, cantidadP:number) {
           super(marca,modelo,precio,id,"AUTO");
            this.cantPuert=cantidadP;
           
        }
    
     
    
        
    }


}