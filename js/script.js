// 1)per prima cosa, creeremo l'array contenente alcuni cognomi.
// 2)dobbiamo chiedere il cognome all'utente
// 3)dobbiamo inserire il cognome dell'utente dentro l'array con gli altri cognomi
// 4)dobbiamo stampare la lista dei cognomi ordinata alfabeticamente, prestiamo attenzione alla lettere maiuscola iniziale
// 5)dobbiamo stampare la posizione in cui si trova la nuova entrata della Lista


// creiamo l'array con dei valori al suo interno, sono state inserite apposta maiuscole e minuscole
var surnames = ['Gianlorenzi', 'biffi', 'Corsini', 'cannone', 'gorleta', 'alesiano', 'giannaccari', 'Mammuccari', 'crudo', 'lusso', 'tavoni', 'donato', 'Gbadamosi', 'sartori', 'sebastiani', 'de marco', 'lai', 'greco', 'rossaro', 'Delfino', 'fontanot', 'ortu'];

// qui chiediamo all'utente di inserire il proprio cognome tramite un prompt
var userSurname = prompt('Inserisci il tuo cognome');


// qui inseriamo il cognome dell'utente all'interno dell'Array
surnames.push(userSurname);



// qui creiamo un ciclo che trasforma i cognomi presenti e quello inserito dall'utente in maniera che si riesca ad ordinarli in ordine alfabetico, altrimenti se la lettera iniziale differiscono (minuscolo e maiuscolo), non riesce ad ordinarli
for (var i = 0; i < surnames.length; i++) {
  surnames[i] = surnames[i].toUpperCase();
}


// con questo comando ordiniamo la lista di cognomi in ordine alfabetico
surnames.sort();


// qui viene usata un'altra variabile per creare un array identico, viene utilizzato join che da la possibilità di indicare il separatore tra gli elementi dell'array, nel nostro caso viene inserito <br> come separatore, per fare in modo che una volta stampato in html ogni successivo elemento dell'array va a capo
var list = surnames.join('<br>');
document.getElementById('list').innerHTML = list;


// qui andiamo a cercare la posizione del cognome inserito dall'utente dopo che l'array è stato ordinato in ordine alfabetico. NB necessario inserire il touppercase quando specifichiamo in quale posizione, perchè il cognome inserito dall'utente è stato trasformato in maiuscolo
var n = surnames.indexOf(userSurname.toUpperCase());


// dato che le posizioni dell'array partono da 0, per conoscere la posizione reale aumentiamo di 1 la variabile che indica la posizione del cognome dell'utente nella lista
var nReal = n + 1;
document.getElementById('position').innerHTML = 'Lei si trova al ' + nReal + '&ordm; posto della lista';
