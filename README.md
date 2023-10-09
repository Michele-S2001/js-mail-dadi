## Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo

- Inizializzare un array con diverse email 
- Tramite un prompt chiedere l'email all'utente
- creo una variabile d'appoggio che mi segnala se ho trovato l'email
  - inizialmente sarà "false", perché non l'ho nemmeno cercata
- PER OGNI email confrontarla con quella inserita dall'utente:
  - SE l'email inserita dall'utente risulta identica a una nell'array:
    - allora trasformo la variabile d'appoggio in "true"
- SE la variabile d'appoggio è diventata "true", quindi l'email corrisponde a una presente nella lista:
  - approva l'accesso
- ALTRIMENTI:
  - nega l'accesso


## Generare un numero random da 1 a 6, sia per il giocatore sia per il computer; Stabilire il vincitore, in base a chi fa il punteggio più alto

- memorizzare in due variabili distinte 1 numero generato automaticamente da 1 a 6

- SE il numero dell'utente è più alto di quello del computer:
  - stampa "hai vinto"
- ALTRIMENTI SE sono uguali:
  - stampa "hai pareggiato"
- ALTRIMENTI:
  - stampa "hai perso"