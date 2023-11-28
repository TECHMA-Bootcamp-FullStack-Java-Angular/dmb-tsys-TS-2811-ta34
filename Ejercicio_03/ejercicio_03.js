"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, color, consumoEnergetico, peso) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE; }
        if (color === void 0) { color = Electrodomestico.COLOR_DEFAULT; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT; }
        if (peso === void 0) { peso = Electrodomestico.PESO_DEFAULT; }
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        this.comprobarConsumoEnergetico(consumoEnergetico);
        this.comprobarColor(color);
    }
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.comprobarConsumoEnergetico = function (letra) {
        var letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        if (letrasValidas.includes(letra.toUpperCase())) {
            this.consumoEnergetico = letra.toUpperCase();
        }
        else {
            this.consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT;
        }
    };
    Electrodomestico.prototype.comprobarColor = function (color) {
        var coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        var colorLowerCase = color.toLowerCase();
        if (coloresValidos.includes(colorLowerCase)) {
            this.color = colorLowerCase;
        }
        else {
            this.color = Electrodomestico.COLOR_DEFAULT;
        }
    };
    Electrodomestico.prototype.precioFinal = function () {
        var precio = this.precioBase;
        switch (this.consumoEnergetico) {
            case 'A':
                precio += 100;
                break;
            case 'B':
                precio += 80;
                break;
            case 'C':
                precio += 60;
                break;
            case 'D':
                precio += 50;
                break;
            case 'E':
                precio += 30;
                break;
            case 'F':
                precio += 10;
                break;
        }
        if (this.peso >= 0 && this.peso < 20) {
            precio += 10;
        }
        else if (this.peso >= 20 && this.peso < 50) {
            precio += 50;
        }
        else if (this.peso >= 50 && this.peso < 80) {
            precio += 80;
        }
        else if (this.peso >= 80) {
            precio += 100;
        }
        return precio;
    };
    Electrodomestico.PRECIO_BASE = 100;
    Electrodomestico.COLOR_DEFAULT = 'blanco';
    Electrodomestico.CONSUMO_ENERGETICO_DEFAULT = 'F';
    Electrodomestico.PESO_DEFAULT = 5;
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precioBase, color, consumoEnergetico, peso, carga) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE; }
        if (color === void 0) { color = Electrodomestico.COLOR_DEFAULT; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT; }
        if (peso === void 0) { peso = Electrodomestico.PESO_DEFAULT; }
        if (carga === void 0) { carga = Lavadora.CARGA_DEFAULT; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.carga = carga;
        return _this;
    }
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.precioFinal = function () {
        var precioBaseElectrodomestico = _super.prototype.precioFinal.call(this);
        return this.carga > 30 ? precioBaseElectrodomestico + 50 : precioBaseElectrodomestico;
    };
    Lavadora.CARGA_DEFAULT = 5;
    return Lavadora;
}(Electrodomestico));
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television(precioBase, color, consumoEnergetico, peso, resolucion, cuatroK) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE; }
        if (color === void 0) { color = Electrodomestico.COLOR_DEFAULT; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT; }
        if (peso === void 0) { peso = Electrodomestico.PESO_DEFAULT; }
        if (resolucion === void 0) { resolucion = Television.RESOLUCION_DEFAULT; }
        if (cuatroK === void 0) { cuatroK = Television.CUATRO_K_DEFAULT; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.resolucion = resolucion;
        _this.cuatroK = cuatroK;
        return _this;
    }
    Television.prototype.getResolucion = function () {
        return this.resolucion;
    };
    Television.prototype.isCuatroK = function () {
        return this.cuatroK;
    };
    Television.prototype.precioFinal = function () {
        var precioBaseElectrodomestico = _super.prototype.precioFinal.call(this);
        var precioFinalTelevision = precioBaseElectrodomestico;
        if (this.resolucion > 40) {
            precioFinalTelevision += precioFinalTelevision * 0.3;
        }
        if (this.cuatroK) {
            precioFinalTelevision += 50;
        }
        return precioFinalTelevision;
    };
    Television.RESOLUCION_DEFAULT = 20;
    Television.CUATRO_K_DEFAULT = false;
    return Television;
}(Electrodomestico));
var MainApp = /** @class */ (function () {
    function MainApp() {
    }
    MainApp.main = function () {
        var electrodomesticos = new Array(10);
        electrodomesticos[0] = new Lavadora(200, 'rojo', 'A', 25, 40);
        electrodomesticos[1] = new Television(500, 'azul', 'B', 30, 45, true);
        electrodomesticos[2] = new Lavadora(150, 'negro', 'C', 15, 25);
        electrodomesticos[3] = new Television(400, 'gris', 'D', 50, 50, false);
        electrodomesticos[4] = new Electrodomestico(120, 'blanco', 'E', 18);
        electrodomesticos[5] = new Lavadora(180, 'azul', 'F', 55, 35);
        electrodomesticos[6] = new Television(600, 'negro', 'A', 70, 60, true);
        electrodomesticos[7] = new Electrodomestico(90, 'rojo', 'B', 10);
        electrodomesticos[8] = new Lavadora(220, 'gris', 'C', 40, 50);
        electrodomesticos[9] = new Television(350, 'blanco', 'D', 25, 30, false);
        var totalElectrodomesticos = 0;
        var totalLavadoras = 0;
        var totalTelevisiones = 0;
        for (var _i = 0, electrodomesticos_1 = electrodomesticos; _i < electrodomesticos_1.length; _i++) {
            var electrodomestico = electrodomesticos_1[_i];
            var precioFinal = electrodomestico.precioFinal();
            console.log("Precio final: ".concat(precioFinal));
            totalElectrodomesticos += precioFinal;
            if (electrodomestico instanceof Lavadora) {
                totalLavadoras += precioFinal;
            }
            else if (electrodomestico instanceof Television) {
                totalTelevisiones += precioFinal;
            }
        }
        console.log("\nTotal Electrodom\u00E9sticos: ".concat(totalElectrodomesticos));
        console.log("Total Lavadoras: ".concat(totalLavadoras));
        console.log("Total Televisiones: ".concat(totalTelevisiones));
    };
    return MainApp;
}());
MainApp.main();
