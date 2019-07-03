"use strict";
exports.__esModule = true;
var batman_1 = require("./batman");
var homemMorcego = new batman_1.Batman();
homemMorcego.setCodenome('Batman');
homemMorcego.setIdentidadeSecreta('Bruce Wayne');
console.log("O codenome do heroi \u00E9: \n    " + homemMorcego.getCodenome() + "\n    e sua identidade secreta: \n    " + homemMorcego.getIdentidadeSecreta());
