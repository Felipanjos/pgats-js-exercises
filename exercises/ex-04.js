function calcularGramasPorDia(peso) {
  return peso * 30;
}

function calcularDuracaoEstoque(estoque, gramasPorDia) {
  return Math.floor(estoque / gramasPorDia);
}

const estoqueRacao = 30000;
const dog = {
  peso: 15,
  nome: 'Juninho',
};

const gramasPorDia = calcularGramasPorDia(dog.peso);
dog.gramasPorDia = gramasPorDia;

console.log(`Nome: ${dog.nome}`);
console.log(`Peso: ${dog.peso}`);
console.log(`Ração recomendada por dia: ${gramasPorDia} gramas`);
console.log(`O estoque atual vai durar em torno de ${calcularDuracaoEstoque(estoqueRacao, gramasPorDia)} dias.`);
