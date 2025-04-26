const nome = 'cooper';
const idade = '1';
const peso = '15';
const raca = 'srd';
const adotado = true;

// const tag = `Nome: ${} | Raça: ${}${} | Peso: ${} kg`;

const normalizedAnimal = {
  nome: nome.toUpperCase(),
  raca: raca.charAt(0).toUpperCase() + raca.substring(1, raca.length).toLowerCase(),
  peso: peso
}

console.log(normalizedAnimal);
