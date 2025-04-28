// Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

const listWithNumbersAndStrings = ['eqiab', 89, 'rifwb', 'qfhvg', 'rusqh', 'idxwi', 77, 26, 76, 'elpbj'];

const arrayStringless = (list) => list.filter((item) => typeof item === 'number');

const listWithNumbersOnly = arrayStringless(listWithNumbersAndStrings);

console.log(listWithNumbersOnly);

