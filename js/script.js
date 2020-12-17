// 1)per prima cosa, creeremo l'array contenente alcuni cognomi.
// 2)dobbiamo chiedere il cognome all'utente
// 3)dobbiamo inserire il cognome dell'utente dentro l'array con gli altri cognomi
// 4)dobbiamo stampare la lista dei cognomi ordinata alfabeticamente, prestiamo attenzione alla lettere maiuscola iniziale
// 5)dobbiamo stampare la posizione in cui si trova la nuova entrata della Lista


// creiamo l'array con dei valori al suo interno, sono state inserite apposta maiuscole e minuscole
var surnames = ['Gianlorenzi', 'biffi', 'Corsini', 'cannone', 'gorleta', 'alesiano', 'giannaccari', 'Mammuccari', 'crudo', 'lusso', 'tavoni', 'donato', 'Gbadamosi', 'sartori', 'sebastiani', 'de marco', 'lai', 'greco', 'rossaro', 'Delfino', 'fontanot', 'ortu'];


// qui chiediamo all'utente di inserire il proprio cognome tramite un prompt
var userSurname = prompt('Inserisci il tuo cognome');
console.log('cognome utente: ' + userSurname);

// qui inseriamo il cognome dell'utente all'interno dell'Array
surnames.push(userSurname);
console.log(surnames);
