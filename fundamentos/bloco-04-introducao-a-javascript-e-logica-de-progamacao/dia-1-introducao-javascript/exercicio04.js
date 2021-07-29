let notaCandidata = Math.round(Math.random()*100);

console.log("Nota: "+notaCandidata)

if (notaCandidata >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
} else if (notaCandidata < 80 && notaCandidata >= 60){
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovada(o).")
}