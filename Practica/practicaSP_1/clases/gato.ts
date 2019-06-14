namespace practicaSP{

    export class gato extends animal {

        public ID:number;
        public ruido:string;

        constructor(Nombre:string,Ruido:string) {
            super(Nombre,4,"gato");
            var maximo = calcularID();
            maximo++;
            this.ID = maximo;
            this.ruido = Ruido;

        }
    
        // haceRuido(input:string):string {
        //     return "miau";
        // }

        
    }

    function calcularID():number{
        let animalesStorage:string|null =  JSON.parse(localStorage.getItem("Localanimal") || "[]");    
        let valormax = arrayMax(animalesStorage);
        return valormax;
    }

    function arrayMax(arr:any) {
        return arr.reduce(function (p:any, v:any) {
            return ( p < JSON.parse(v).ID ? JSON.parse(v).ID: p );
        },0);
      }

    
}

