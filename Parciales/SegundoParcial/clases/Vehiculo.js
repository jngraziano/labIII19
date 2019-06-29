"use strict";
/// <reference path="../clases/Auto.ts" />
/// <reference path="../clases/Camioneta.ts" />
// import './cliente1';
var segundoParcial;
(function (segundoParcial) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo, precio, id, tipo) {
            this.ID = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.tipo = tipo;
        }
        return Vehiculo;
    }());
    segundoParcial.Vehiculo = Vehiculo;
})(segundoParcial || (segundoParcial = {}));
