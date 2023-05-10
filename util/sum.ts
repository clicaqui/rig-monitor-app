import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default function sum(miners:any) {
    let soma = 0; 
    for (let i = 0; i < miners.length; i++) {
        soma += miners[i].hashrate; 
    }
    let result:Double = (soma / 1000);
    var saida = "";
    if (result > 1000) {
        saida = (result / 1000).toFixed(2) + ' MH/s'
    } else {
        saida = (result).toFixed(2) + ' kH/s'
    }
    return saida;
}