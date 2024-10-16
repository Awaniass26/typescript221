// Crée une classe Animal avec une méthode parler().
// Crée une classe Chien qui hérite de Animal et redéfinit la méthode parler().
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
var Animal = /** @class */ (function () {
    function Animal(nom) {
        this.nom = nom;
    }
    Animal.prototype.parler = function () {
        console.log("".concat(this.nom, " fait du bruit."));
    };
    return Animal;
}());
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chien.prototype.parler = function () {
        console.log("".concat(this.nom, " fait du bruit."));
    };
    return Chien;
}(Animal));
var Animal1 = new Animal("KOALA");
