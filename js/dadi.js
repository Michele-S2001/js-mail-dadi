// ->->-> DADI <-<-<- 

//memorizzare in due variabili distinte 1 numero generato automaticamente da 1 a 6

randomUserNumber = Math.floor(Math.random() * (7 - 1) + 1);
console.log(randomUserNumber);

randomComputerNumber = Math.floor(Math.random() * (7 - 1) + 1);
console.log(randomComputerNumber);

// confronto i due numeri
if (randomUserNumber > randomComputerNumber) {
  console.log('Hai vinto!');
} else if (randomUserNumber === randomComputerNumber){
  console.log('Hai pareggiato!');
} else {
  console.log('Hai perso!');
}