// Button 
const retry = document.getElementById('retry');
const level = document.getElementById('level');
const erase = document.getElementById('erase');
const indic = document.getElementById('indice');
const verif = document.getElementById('verif');

const entry = document.querySelectorAll('.case');

// Recommencer
retry.addEventListener('click',() => {
    if ( confirm('Etes vous sur de vouloir recommencer ?')) {
        console.log("c'est effacer ! ");
    } else {
        console.log("c'est pas effacer !");
    }
})

// Change de niveau
level.addEventListener('change',() => {
    levelSelected = level.selectedIndex;
    if(levelSelected === 1){
        console.log('Vous avez choisi : facile')
    } else if(levelSelected === 2){
        console.log('Vous avez choisi : moyen')
    } else if(levelSelected === 3){
        console.log('Vous avez choisi : difficile')
    } else{
        console.log('Vous devez choisir un niveau')
    }
})

// effacer
erase.addEventListener('click',() => {
    console.log('vous pouvez effacer')
})

// indice
indice.addEventListener('click',() => {
    console.log('voila un indice')
})

// verifier
verif.addEventListener('click',() => {
    console.log("C'est tres bien !")
})

// Case a Chiffre uniquement 
entry.addEventListener('blur', () => {
    console
})



