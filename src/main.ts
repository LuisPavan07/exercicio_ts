function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoDaMultiplicacao = multiplicar(10, 9);
const saudacaoBasica = saudacao("Luis")

console.log(resultadoDaMultiplicacao);
console.log(saudacaoBasica);