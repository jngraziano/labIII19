"use strict";
/// <reference path="../clases/Vehiculo.ts" />
// /// <reference path="../clases/Auto.ts" />
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
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(marca, modelo, precio, id, cuatroXCuatro) {
            var _this = _super.call(this, marca, modelo, precio, id, "CAMIONETA") || this;
            _this.cuatroXcuatro = cuatroXCuatro;
            return _this;
        }
        return Camioneta;
    }(segundoParcial.Vehiculo));
    segundoParcial.Camioneta = Camioneta;
})(segundoParcial || (segundoParcial = {}));
