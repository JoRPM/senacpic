// superclass - classe generica
abstract class Hero {

    //atributos
    private codenome:string;
    private identidadeSecreta:string;

    // construtor da classe
    constructor() {}

    // métodos gets e sets (encapsulamento)
    getCodenome():string {
        return this.codenome;
    }

    setCodenome(codenome:string):void {
        this.codenome = codenome;
    }

    getIdentidadeSecreta():string {
        return this.identidadeSecreta;
    }

    setIdentidadeSecreta(identidadeSecreta:string):void {
        this.identidadeSecreta = identidadeSecreta;
    }
}

// inteface - modelo, padrão 
/* como fosse assinado um contrato, aonde obriga-se a 
utilizar e implementar aquele(s) recursos */

interface Habilidades {
    superPoder?:string
    pericia?:string
    poder:number

    getFraqueza():string;
}

export { Hero, Habilidades }