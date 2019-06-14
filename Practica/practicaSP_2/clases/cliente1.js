"use strict";
/// <reference path="../clases/persona1.ts" />
// import './persona1';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var segundoParcial;
(function (segundoParcial) {
    var cliente1 = /** @class */ (function (_super) {
        __extends(cliente1, _super);
        // protected setID: number = 0;
        function cliente1(Nombre, Apellido, Edad, Sexo, id) {
            //no tengo idea porque tira este error
            // Uncaught TypeError: Object prototype may only be an Object or null: undefined
            // super(Nombre,Apellido);
            // var maximo = calcularID();
            var _this = _super.call(this, Nombre, Apellido) || this;
            _this.edad = 0;
            _this.sexo = "FEMENINO";
            //    console.log(Apellido);
            //    console.log(Nombre);
            _this.ID = id;
            _this.edad = Edad;
            _this.sexo = Sexo;
            return _this;
        }
        return cliente1;
    }(segundoParcial.persona1));
    segundoParcial.cliente1 = cliente1;
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
})(segundoParcial || (segundoParcial = {}));
