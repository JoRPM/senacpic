// funções simples
function exibeMsg(msg) {
    console.log(msg);
}
// call fn
exibeMsg('Hello World');
var nmFuncao = 'exibeMsg';
exibeMsg("Uma outra chamada da fun\u00E7\u00E3o " + nmFuncao);
// funções com parametros(argumentos) opcionais
var soma = 10;
// função com valor padrão(default)
function contador(valor) {
    if (valor === void 0) { valor = 1; }
    soma += valor;
    console.log(soma);
}
contador();
contador(5);
contador(10);
function contador2(valor) {
    console.log(valor);
    soma += valor | 1;
    console.log(soma);
}
contador2();
// arrow function com expressão ternária
var parOuImpar;
parOuImpar = function (valor) { return (valor % 2 == 0) ? "Par" : "Impar"; };
console.log(parOuImpar(2));
