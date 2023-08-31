let resultado = 0
let nivel = " "
calcularPartidas(82, 15)

function calcularPartidas(partVit, partPer){
    resultado = partVit - partPer
    return resultado
}

definirNivel(resultado)

function definirNivel(resultado){
    if (resultado <= 10){
        nivel = "Ferro"
    }else if (resultado > 10 && resultado <= 20){
        nivel = "Bronze"
    }else if (resultado > 20 && resultado <= 50){
        nivel = "Prata"
    }else if (resultado > 50 && resultado <= 80){
        nivel = "Ouro"
    }else if (resultado > 80 && resultado <= 90){
        nivel = "Diamante"
    }else if (resultado > 90 && resultado <= 100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }

    console.log("O Herói tem de saldo de " + resultado + " vitorias, e está no nivel de " + nivel)
}