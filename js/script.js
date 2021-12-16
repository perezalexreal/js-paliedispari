
function palindromaGame(inputString) {
    let confronto = '';
    for (let i = inputString.length - 1 ; i >= 0 ; i--) {
        confronto += inputString[i];
    }
    if( confronto === inputString ){
        alert(`${inputString} è una parola palindroma!`);
    } else {
        alert(`${inputString} Non è una parola palindroma!`);
    }
    return confronto;
}

const inputUser =  prompt("Inserisci una parola palindroma");

palindromaGame(inputUser)

