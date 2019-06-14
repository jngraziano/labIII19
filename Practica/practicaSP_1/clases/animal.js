"use strict";
var practicaSP;
(function (practicaSP) {
    var animal = /** @class */ (function () {
        function animal(Nombre, cantidadP, tipo) {
            this.nombre = Nombre;
            this.cantPatas = cantidadP;
            this.tipo = tipo;
        }
        return animal;
    }());
    practicaSP.animal = animal;
})(practicaSP || (practicaSP = {}));
