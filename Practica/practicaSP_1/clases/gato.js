"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var practicaSP;
(function (practicaSP) {
    var gato = /** @class */ (function (_super) {
        __extends(gato, _super);
        function gato(Nombre, Ruido) {
            var _this = _super.call(this, Nombre, 4, "gato") || this;
            var maximo = calcularID();
            maximo++;
            _this.ID = maximo;
            _this.ruido = Ruido;
            return _this;
        }
        return gato;
    }(practicaSP.animal));
    practicaSP.gato = gato;
    function calcularID() {
        var animalesStorage = JSON.parse(localStorage.getItem("Localanimal") || "[]");
        var valormax = arrayMax(animalesStorage);
        return valormax;
    }
    function arrayMax(arr) {
        return arr.reduce(function (p, v) {
            return (p < JSON.parse(v).ID ? JSON.parse(v).ID : p);
        }, 0);
    }
})(practicaSP || (practicaSP = {}));
