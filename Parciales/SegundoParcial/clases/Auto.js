"use strict";
/// <reference path="../clases/Vehiculo.ts" />
// /// <reference path="../clases/Camioneta.ts" />
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
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(marca, modelo, precio, id, cantidadP) {
            var _this = _super.call(this, marca, modelo, precio, id, "AUTO") || this;
            _this.cantPuert = cantidadP;
            return _this;
        }
        return Auto;
    }(segundoParcial.Vehiculo));
    segundoParcial.Auto = Auto;
})(segundoParcial || (segundoParcial = {}));
