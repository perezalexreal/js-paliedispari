
function RandomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}


function giocoPD(pariDispariUser, numUser) {
    const pcNum = RandomNumber(1, 5);
    const sum = numUser + pcNum;
    const resultPD = sum % 2;
    if (resultPD === 0 && pariDispariUser === 0) {
        alert(`Il numero sommato è pari, giusto! La somma è stata ${sum}`);
    } else if (resultPD != 0 && pariDispariUser === 1) {
        alert(`Il numero sommato è dispari, giusto! La somma è stata ${sum}`);
    } else {
        alert(`Hai perso, la somma è stata ${sum}`);
    }
}



const pariDispari = parseInt(prompt("Pari o dispari? Inserisci 0 per PARI e 1 per dispari"));

const num = parseInt(prompt("Inserisci un numero da 1 a 5"));



giocoPD(pariDispari, num);