const dados = require("./dados.json");

function calc(dados) {

    let menor = Number.MAX_VALUE;
    let maior = Number.MIN_VALUE;
    let soma = 0;
    let diasFaturamento = 0;

    for (const dia of dados) {
        if (dia.valor > 0) {
            if (dia.valor < menor) menor = dia.valor;
            if (dia.valor > maior) maior = dia.valor;
            soma += dia.valor;
            diasFaturamento++
        }
    }

const media = soma/diasFaturamento;

let diasAcimaDaMedia = 0
for(const dia of dados){
    if(dia.valor>media){
        diasAcimaDaMedia++;
    }
}
return { menor, maior, media, diasAcimaDaMedia };
};

const res = calc(dados);

console.log(`Menor valor de faturamento: ${res.menor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${res.maior.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${res.diasAcimaDaMedia}`);