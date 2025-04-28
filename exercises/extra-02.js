// Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata.
// O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.

const text =
  'the quick brown fox jumps over the lazy dog, while the programmer writes code, builds features, and tests new ideas. every day brings a chance to learn, improve, and create better solutions for the world. collaboration, design, and innovation are at the heart of every successful project.';
const expectedVowels = 'aeiou';

const isVowel = (text) => expectedVowels.includes(text.toLowerCase());

const countVowels = (text) => text.split('').filter(isVowel).length;

console.log(countVowels(text));
