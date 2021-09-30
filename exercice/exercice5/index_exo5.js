// Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : 
// tarifs bleu, vert, orange et rouge. Le tarif dépend de la situation du conducteur :
//      • un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, 
//             se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
//      • un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans 
//             mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif 
//             rouge pour un accident, sinon il est refusé.
//      • un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert 
//             s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà
//      • De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur 
//             immédiatement la plus avantageuse s'il est entré dans la maison depuis plus de cinq ans. Ainsi, s'il satisfait à cette exigence, 
//             un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange.
// Écrire l'algorithme permettant de saisir les données nécessaires (avec contrôle de saisie) et de traiter ce problème.

const btn1 = document.getElementById('ajouter');

btn1.addEventListener('click', () => {
    const age = document.getElementById('age');
    const agePermis = document.getElementById('agePermis');
    const color = document.getElementById('color');
    const accident = document.getElementById('accident');
    const ageFidel = document.getElementById('ageFidel');
    const colorFidel = document.getElementById('colorFidel');

    let questAge = prompt('Quel age avez vous ? ');
    let questAgePermis = prompt('Depuis quand avez vous le permis ? ');
    let questAccident = prompt('Combien daccidents avez vous eu ? ')

    age.innerText = questAge;
    agePermis.innerText = questAgePermis;
    accident.innerText = questAccident;

    if(questAge < 18){
        alert("Vous n'avez pas le permis !");
    } else if (questAge >= 18 && questAge <= 25){
        if(questAgePermis <= 2 && questAccident === "0" ){
            color.innerHTML = 'Rouge';
            ageFidel.innerHTML = questAgePermis;
            colorFidel.innerHTML = 'Rouge';
        } else if(questAgePermis > 3 && questAccident === "0"){
            if(questAge - questAgePermis < 18 ){
                alert("Vous ne pouvez pas avoir eu le permis avant l'age de 18 ans")
            } else {
                if(questAgePermis >= 5){
                    color.innerHTML = 'Orange';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Vert';
                }else {
                    color.innerHTML = 'Orange';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Orange';
                }
            }
        } else {
            alert('Nous ne pouvons pas vous assurer !')
        }
    } else if (questAge > 25){
        if(questAgePermis <= 2 && questAccident === "0" ){
            color.innerHTML = 'Orange';
            ageFidel.innerHTML = questAgePermis;
            colorFidel.innerHTML = 'Orange';
        } else if (questAgePermis >= 3 && questAccident === "0") {
            if(questAge - questAgePermis < 18 ){
                alert("Vous ne pouvez pas avoir eu le permis avant l'age de 18 ans")
            } else {
                if(questAgePermis >= 5){
                    color.innerHTML = 'Vert';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Bleu';
                } else {
                    color.innerHTML = 'Vert';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Vert';
                }
            }
        } else if (questAgePermis >= 3 && questAccident === "1") {
            if(questAge - questAgePermis < 18 ){
                alert("Vous ne pouvez pas avoir eu le permis avant l'age de 18 ans")
            } else {
                if(questAgePermis >= 5){
                    color.innerHTML = 'Orange';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Vert';
                } else {
                    color.innerHTML = 'Orange';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Orange';
                }
            }
        } else if (questAgePermis >= 3 && questAccident === "2") {
            if(questAge - questAgePermis < 18 ){
                alert("Vous ne pouvez pas avoir eu le permis avant l'age de 18 ans")
            } else {
                if(questAgePermis >= 5){
                    color.innerHTML = 'Rouge';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Orange';
                } else {
                    color.innerHTML = 'Rouge';
                    ageFidel.innerHTML = questAgePermis;
                    colorFidel.innerHTML = 'Rouge';
                }
            }
        } else {
            alert('Nous ne pouvons pas vous assurer du tout !')
        }
    } else {
        alert('Nous ne pouvons pas vous assurer du tout du tout !')
    }
})
