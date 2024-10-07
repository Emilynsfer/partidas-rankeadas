let resultado = calcular(40, 20)


function calcular(vitorias, derrotas) {
    let saldoVitorias = (vitorias - derrotas)
    return saldoVitorias
}

if (resultado <= 10) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Ferro")

} else if (resultado > 10 && resultado <= 20) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Bronze")

} else if (resultado > 20 && resultado <= 50) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Prata")
  
} else if (resultado > 50 && resultado <= 80) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Ouro") 

} else if (resultado > 80 && resultado <= 90) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Diamante")

} else if (resultado > 90 && resultado <= 100) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Lendário")

} else if (resultado >= 101) {
    console.log("O Herói tem saldo de vitórias de " + resultado + " e está no nível Imortal")

} else {
    console.log("Está operação não pode ser realizada.")
}
