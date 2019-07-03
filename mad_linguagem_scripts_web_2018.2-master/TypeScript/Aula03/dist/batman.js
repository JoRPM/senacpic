"use strict";
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
exports.__esModule = true;
var hero_base_1 = require("./hero-base");
// subclass - classe especialista
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    Batman.prototype.getFraqueza = function () {
        return '';
    };
    Batman.prototype.getArqueRival = function () {
        return "Coringa";
    };
    Batman.prototype.getPericia = function () {
        return "A(s) per\u00EDcia(s) do \n        " + this.getCodenome() + " \u00E9(s\u00E3o): " + this.pericia;
    };
    Batman.prototype.setPericia = function (pericia) {
        this.pericia = pericia;
    };
    Batman.prototype.getSuperPoder = function () {
        return this.superPoder;
    };
    Batman.prototype.setSuperPoder = function (superPoder) {
        this.superPoder = superPoder;
    };
    Batman.prototype.getPoder = function () {
        return this.poder;
    };
    Batman.prototype.setPoder = function (poder) {
        this.poder = poder;
    };
    return Batman;
}(hero_base_1.Hero));
exports.Batman = Batman;
