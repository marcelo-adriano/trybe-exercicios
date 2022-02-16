function showSituation(imcNumber) {
  switch (true) {
    case (imcNumber < 18.5):
      return "Abaixo do peso (magreza)";
    case (imcNumber >= 18.5 && imcNumber < 25):
      return "Peso normal";
    case (imcNumber >= 25 && imcNumber < 30):
      return "Acima do peso (sobrepeso)";
    case (imcNumber >= 30 && imcNumber < 35):
      return "Obesidade grau I";
    case (imcNumber >= 35 && imcNumber < 40):
      return "Obesidade grau II";
    case (imcNumber >= 40 ):
      return "Obesidade graus III e IV";
    default:
      return 'Os dados passados não são números';
  }
}

module.exports = showSituation;
