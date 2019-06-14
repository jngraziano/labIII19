"use strict";
/// <reference path="../clases/cliente1.ts" />
// import './cliente1';
var segundoParcial;
(function (segundoParcial) {
    var persona1 = /** @class */ (function () {
        function persona1(Nombre, Apellido) {
            this.nombre = Nombre;
            this.apellido = Apellido;
        }
        return persona1;
    }());
    segundoParcial.persona1 = persona1;
})(segundoParcial || (segundoParcial = {}));
