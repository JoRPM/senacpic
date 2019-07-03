"use strict";
exports.__esModule = true;
// superclass - classe generica
var Hero = /** @class */ (function () {
    // construtor da classe
    function Hero() {
    }
    // métodos gets e sets (encapsulamento)
    Hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    Hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    Hero.prototype.getIdentidadeSecreta = function () {
        return this.identidadeSecreta;
    };
    Hero.prototype.setIdentidadeSecreta = function (identidadeSecreta) {
        this.identidadeSecreta = identidadeSecreta;
    };
    return Hero;
}());
exports.Hero = Hero;
