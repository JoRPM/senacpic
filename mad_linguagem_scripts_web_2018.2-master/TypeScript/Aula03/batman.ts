import { Hero, Habilidades } from './hero-base'

// subclass - classe especialista
export class Batman extends Hero implements Habilidades {
    
    superPoder?: string;
    pericia?: string;
    poder: number;
    
    constructor() {
        super()
    }
    
    getFraqueza(): string {
        return '';
    }

    getArqueRival():string {
        return `Coringa`
    }

    getPericia():string {
        return `A(s) perícia(s) do 
        ${this.getCodenome()} é(são): ${this.pericia }`
    }
    
    setPericia(pericia:string):void {
        this.pericia = pericia;
    }

    getSuperPoder():string {
        return this.superPoder;
    }
    setSuperPoder(superPoder:string):void {
        this.superPoder = superPoder;
    }


    getPoder():number{
        return this.poder;
    }

    setPoder(poder:number):void{
        this.poder = poder;
    }
}