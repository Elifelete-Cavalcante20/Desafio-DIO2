let rank = pontoRank (110, 14)
let nivel = "Ferro"
const Mensagem = "O Herói tem de saldo de " + rank + " e está no nível de "


function pontoRank (rankVitoria, rankDerrota){
    let result = rankVitoria - rankDerrota
    return result
}

switch (true){
    case rank <= 10:
        console.log (Mensagem + nivel + ".")
        break;
    case rank >= 11 && rank <= 20: 
        nivel = "Bronze"
        console.log (Mensagem + nivel + ".")
        break;
    case rank >= 21 && rank <= 50:
        nivel = "Prata"
        console.log(Mensagem + nivel + ".")
        break;
    case rank >= 51 && rank <= 80: 
        nivel = "Ouro"
        console.log(Mensagem + nivel + ".")
        break;
    case rank >= 81 && rank <= 90:
        nivel = "Diamante"
        console.log(Mensagem + nivel + ".")
        break;
    case rank >= 91 && rank <= 100:
        nivel = "Lendário"
        console.log(Mensagem + nivel + ".")
        break;
    case rank >= 101: 
        nivel = "Imortal"
        console.log(Mensagem + nivel + ".")
        break;
}

