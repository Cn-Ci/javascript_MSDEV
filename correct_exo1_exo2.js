
// let age;

// //version 1
// while(parseFloat(age) < 6 || parseFloat(age) >= 18 || isNaN(age)){
//     age = +prompt("Quel est l'age de votre enfant ?");
//     if(age >= 6 && age < 8){
//         alert("Votre enfant joue en poussin");
//     }
//     else if(age >= 8 && age < 10){
//         alert("Votre enfant joue en pupille");
//     }
//     else if(age >= 10 && age < 12){
//         alert("Votre enfant joue en minime");
//     }
//     else if(age >= 12 && age < 15){
//         alert("Votre enfant joue en cadet");
//     }
//     else if(age >= 15 && age < 18){
//         alert("Votre enfant joue en juniors");
//     }
//     else if(isNaN(age) || age == ""){
//         alert("L'age n'est pas valide !");
//     }
//     else if(age < 6){
//         alert("Votre enfant est trop jeune !");
//     }
//     else{
//         alert("Votre enfant est trop vieux !");
//     }
// }

// //version 2
// while(parseFloat(age) < 6 || parseFloat(age) >= 18 || isNaN(age)){
//     age = +prompt("Quel est l'age de votre enfant ?");
//     switch(age){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             alert("trop jeune");
//             break;
//         case 6:
//         case 7:
//             alert("poussin");
//             break;
//         ///...
//         case 15:
//         case 16:
//         case 17:
//             alert("junior");
//             break;
//         default:
//             alert("trop vieux");
//     }
// }

// //version 3
// while(parseFloat(age) < 6 || parseFloat(age) >= 18 || isNaN(age)){
//     age = +prompt("Quel est l'age de votre enfant ?");
//     switch(true){
//         case age < 6 :
//             alert("Votre enfant est trop jeune !");
//             break;
//         case age >= 6 && age < 8 :
//             alert("Votre enfant joue en poussin");
//             break;
//         case age >= 8 && age < 10 :
//             alert("Votre enfant joue en pupille");
//             break;
//         //...
//         case age >= 18:
//             alert("Votre enfant est trop vieux !");
//             break;
//         case isNaN(age) || age == "" :
//             alert("L'age n'est pas valide !");
//     }
// }

// exo 2 Methode Cesear
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