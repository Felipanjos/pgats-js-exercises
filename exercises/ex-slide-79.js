function passeioDoCachorro() {
  const voltasParaFicarSatisfeito = 5;
  let voltaAtual = 1;

  while (voltaAtual <= voltasParaFicarSatisfeito) {
    console.log(`Volta atual: ${voltaAtual}`);
    voltaAtual++;
  }

  console.log(`Cachorro satisfeito, 5 voltas alcançadas!`);
}

passeioDoCachorro();
