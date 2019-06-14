/// <reference path="../clases/persona1.ts" />
// import './persona1';

namespace segundoParcial{

   export class cliente1 extends persona1  {
       
        protected ID:number;
        protected edad:number= 0;
        protected sexo:string = "FEMENINO";
        // protected setID: number = 0;
        
    
        constructor(Nombre:string, Apellido:string,Edad:number,Sexo:string, id:number) {
            //no tengo idea porque tira este error
            // Uncaught TypeError: Object prototype may only be an Object or null: undefined
            // super(Nombre,Apellido);
            // var maximo = calcularID();
         
            super(Nombre,Apellido);
        //    console.log(Apellido);
        //    console.log(Nombre);

          this.ID=id;

        
           this.edad=Edad;
           this.sexo=Sexo;
          
           
           

        }
        
    
        
    }


    // function calcularID():number{
    //     let personasStorage:string|null =  JSON.parse(localStorage.getItem("LocalPersona") || "[]");    
    //     let valormax = arrayMax(personasStorage);
    //     return valormax;
    // }

    // function arrayMax(arr:any) {
    //     return arr.reduce(function (p:any, v:any) {
    //       return ( p < JSON.parse(v).ID ? JSON.parse(v).ID: p );
    //     },0);
    //   }

}