import { Batman } from './batman'

let homemMorcego = new Batman();
homemMorcego.setCodenome('Batman')
homemMorcego.setIdentidadeSecreta('Bruce Wayne')

console.log(
    `O codenome do heroi é: 
    ${homemMorcego.getCodenome()}
    e sua identidade secreta: 
    ${homemMorcego.getIdentidadeSecreta()}`)
