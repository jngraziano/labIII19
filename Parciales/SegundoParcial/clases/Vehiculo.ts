/// <reference path="../clases/Auto.ts" />
/// <reference path="../clases/Camioneta.ts" />


// import './cliente1';


namespace segundoParcial{

    export class Vehiculo {
       
       
        protected ID:number;
        protected marca:string;
        protected modelo: string;
        protected precio: any; 
        protected tipo: any; 

        
    
        constructor(marca:string, modelo:string,precio:any,id:number, tipo:string) {
            this.ID=id;
            this.marca=marca;
            this.modelo=modelo;
            this.precio=precio;
            this.tipo=tipo;

           
        }
    
     
    
        
    }


}