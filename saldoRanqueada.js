let win = 32
let loose = 2

let result = win - loose

function calculator(saldoVitorias) {
    let nivel;
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`)
    return (saldoVitorias)
}
let saldoFinal = calculator(result);  // Chamando a função

