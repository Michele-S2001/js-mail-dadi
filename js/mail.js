// ->->-> EMAIL <-<-<- 

// mail array trovato = false
const emails = [
  "balin@gmail.com",
  "dwalin@hotmail.com",
  "fili@hotmail.com",
  "kili@gmail.com",
  "dori@gmail.com",
  "nori@hotmail.com",
  "ori@hotmail.com",
  "gloin@gmail.com",
  "bifur@gmail.com", 
  "bofur@hotmail.com",
  "bombur@gmail.com"
];
console.log(emails.length);

// chiedo l'email dell'utente
const userEmail = prompt('Inserisci la tua email:');

// confronto dell'email inserita dall'utente per garantire o meno l'accesso
let finded = false;

for (let i = 0; i < emails.length; i++) {
  let currentEmail = emails[i];

  if (userEmail === currentEmail) {
    finded = true;
  }
}

if (finded === true) {
  console.log('Accesso approvato');
} else {
  console.log('Accesso negato');
} 
