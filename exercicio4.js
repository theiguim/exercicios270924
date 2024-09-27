const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcPer(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    const percentuais = {};
    
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + '%';
    }
    
    return percentuais;
}

const percentuais = calcPer(faturamento);

console.log("Percentuais de faturamento por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}`);
}