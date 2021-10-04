// Button 
const retry = document.getElementById('retry');
const level = document.getElementById('level');
const erase = document.getElementById('erase');
const indic = document.getElementById('indice')

retry.addEventListener('click',() => {
    if ( confirm('Etes vous sur de vouloir recommencer ?')) {
        console.log("c'est effacer ! ");
    } else {
        console.log("c'est pas effacer !");
    }
})

level.addEventListener('click',() => {
    console.log('Choisissez un niveau')
})

erase.addEventListener('click',() => {
    console.log('vous pouvez effacer')
})

indice.addEventListener('click',() => {
    console.log('voila un indice')
})


const entry = document.querySelectorAll('.case');
const number = document.que

console.log(entry);

