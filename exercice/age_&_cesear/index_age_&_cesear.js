// Exo 1 : Écrire un algorithme qui demande l’âge d’un enfant à l’utilisateur.  Vérifier que la saisie est conforme. En fonction de l'âge, indiquer à l’utilisateur dans quelle catégorie l’enfant jouera au football cette année :
// 6 →  7 : Poussin 
// 8 →  9 : Pupille 
// 10 →  11 : Minime
// 12 → 14 : Cadet
// 15 → 17: Junior
// Faire 2 versions, l’une avec un if else if …, l’autre avec un switch case

// let btn1 = document.querySelector('.btn1');
// let questionContainer = document.querySelector('.answer');

// btn1.addEventListener('click', () => {
//     let age = prompt('Quel age avez vous ? ')
//     questionContainer.innerHTML = "";
//     if(parseFloat(age) < 6 ){
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous ne pouvez pas jouer ! </h3>'
//     }else if ( parseFloat(age) >= 6 && parseFloat(age) < 8) {
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un poussin ! </h3>'
//     }else if ( parseFloat(age) >= 8 && parseFloat(age) < 10) {
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un pupille ! </h3>'
//     }else if ( parseFloat(age) >= 10 && parseFloat(age) < 12) {
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un minime ! </h3>'
//     }else if ( parseFloat(age) >= 12 && parseFloat(age) < 15) {
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un cadet ! </h3>'
//     }else if ( parseFloat(age) >= 15 && parseFloat(age) <= 17) {
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un junior ! </h3>'
//     } else 
//         questionContainer.innerHTML = "";
//         questionContainer.innerHTML += '<h3> Réessayer </h3>'
// })

let questionContainer = document.querySelector('.answer');
const age = prompt('Quel age avez vous ?');
switch (true) {
    case parseFloat(age) < 6:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous ne pouvez pas jouer ! </h3>'
        break;
        case parseFloat(age) >= 6 && parseFloat(age) < 8:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un poussin ! </h3>'
        break;
        case parseFloat(age) >= 8 && parseFloat(age) < 10:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un pupille ! </h3>'
        break;
        case  parseFloat(age) >= 10 && parseFloat(age) < 12:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un minime ! </h3>'
        break;
        case  parseFloat(age) >= 12 && parseFloat(age) < 15:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un cadet ! </h3>'
        break;
        case parseFloat(age) >= 15 && parseFloat(age) <= 17:
            questionContainer.innerHTML += '<h3>Vous avez ' + parseFloat(age) + ' ans donc vous êtes un junior ! </h3>'
        break;
        case isNan(age) || age == "":
            questionContainer.innerHTML += '<h3>Votre age n'/'est pas valide, Réessayer</h3>'
        break;
    default:
        questionContainer.innerHTML += '<h3>Vous êtes un ancêtre, vous ne pouvez donc pas jouer !</h3>';
}

/********************************************************************************************************** */
/********************************************************************************************************** */
/********************************************************************************************************** */

// Écrire un algorithme d’encodage d’un texte par décalage. On commence par demander à l’utilisateur de saisir son texte, 
// puis on lui demande un nombre entier qui correspondra au décalage, enfin on lui affiche son texte encodé. 
// Ex : Si le nombre pour le décalage est 3, les « a » deviennent des « d », les « b » des « e » et ainsi de suite.

// function caesarCipher(string, shift) {
//     let resultArray = [];
//     for (let i = 0; i < string.length; i++) {
//         //code ASCII
//         let code = string.charCodeAt(i) + shift
//         while (code>122) {
//             code = (code -122) + 96
//         }
//         //lettre
//         resultArray.push(String.fromCharCode(code))
//     }
//     // separation entre chaque caractère
//     return resultArray.join('-')
// }


