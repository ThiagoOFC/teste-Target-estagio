
// const faturamento_diario = [
//     1200, 1500, 0, 0, 1800, 1900, 0, 2000, 2100, 0, 0, 1750, 1600,
// ]
// const start = performance.now();
// const faturamentoValido = faturamento_diario.filter(e=> e > 0 )
// const menorFaturamento = Math.min(...faturamentoValido)
// const maiorFaturamento = Math.max(...faturamentoValido)
// const soma = faturamentoValido.reduce((valorAcumulado, valorAtual)=> valorAcumulado + valorAtual, 0) 
// const media = soma / faturamentoValido.length; 
// const diasAcimaDoFaturamento = faturamento_diario.filter(valor => valor > media);
// console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`)
// console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`)
// console.log(`Número de dias com faturamento acima da média: ${diasAcimaDoFaturamento.length} com os valores ${diasAcimaDoFaturamento}`)
// const end = performance.now();
// const executionTime = (end - start) / 1000; 

// console.log(`Tempo de execução: ${executionTime.toFixed(6)} segundos`);



const fs = require('fs');

const rawData = fs.readFileSync('./questao3/dados.json');
const faturamento_diario = JSON.parse(rawData);
const start = performance.now();
const valores = faturamento_diario.map(entry => entry.valor);
const faturamentoValido = valores.filter(valor => valor > 0);
const menorFaturamento = Math.min(...faturamentoValido);
const maiorFaturamento = Math.max(...faturamentoValido);
const soma = faturamentoValido.reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual, 0);
const media = soma / faturamentoValido.length;
const diasAcimaDoFaturamento = valores.filter(valor => valor > media);
console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDoFaturamento.length} com os valores ${diasAcimaDoFaturamento}`);
const end = performance.now();
const executionTime = (end - start) / 1000;

console.log(`Tempo de execução: ${executionTime.toFixed(6)} segundos`);
