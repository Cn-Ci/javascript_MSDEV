function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function matchNul(pions) {
    for (var i = 0; i < pions.length; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }
    return true;
} 

function game() {
    let pions = document.querySelectorAll('#app button')
    let joueurs = ["X", "0"];
    let tour = 0;
    let gameFinish = false;
    let afficheur = document.querySelector('h3');
    for (let i = 0; i < pions.length; i++) {
        pions[i].addEventListener('click', (evt) => {
            if(gameFinish) return;
            if(!pions[i].innerHTML.length == 0){
                afficheur.innerHTML = "Case occupé, Réessayez !";
            } else {
                setSymbol(evt.currentTarget, joueurs[tour]);
                gameFinish = rechercherVainqueur(pions, joueurs, tour);
                if(gameFinish) {
                    afficheur.innerHTML = "Le joueur " + joueurs[tour] + " a gagné, <a href='index_morpion.html'>Rejouez !</a>"
                    return;
                }
                tour++;
                tour = tour % 2;
            }
            if(matchNul(pions)){
                afficheur.innerHTML = "Match Nul ! <a href='index_morpion.html'>Rejouez !</a>";
                return;
            }
        });     
        afficheur.innerHTML = "Joueur " + joueurs[tour] + ", c'est à vous !";
    }
}
game()


function rechercherVainqueur(pions, joueurs, tour) {
    if (
        pions[0].innerHTML == joueurs[tour] && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#eccde2";
        pions[1].style.backgroundColor = "#eccde2";
        pions[2].style.backgroundColor = "#eccde2";
        return true;
    }
    if (
        pions[3].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour]
    ) {
        pions[3].style.backgroundColor = "#eccde2";
        pions[4].style.backgroundColor = "#eccde2";
        pions[5].style.backgroundColor = "#eccde2";
        return true;
    }
    if (pions[6].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]
    ) {
        pions[6].style.backgroundColor = "#eccde2";
        pions[7].style.backgroundColor = "#eccde2";
        pions[8].style.backgroundColor = "#eccde2";
        return true;
    }
    if (
        pions[0].innerHTML == joueurs[tour] && pions[3].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#eccde2";
        pions[3].style.backgroundColor = "#eccde2";
        pions[6].style.backgroundColor = "#eccde2";
        return true;
    }
    if (
        pions[1].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour]
    ) {
        pions[1].style.backgroundColor = "#eccde2";
        pions[4].style.backgroundColor = "#eccde2";
        pions[7].style.backgroundColor = "#eccde2";
        return true;
    }
    if (pions[2].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#eccde2";
        pions[5].style.backgroundColor = "#eccde2";
        pions[8].style.backgroundColor = "#eccde2";
        return true;
    }
    if (pions[0].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#eccde2";
        pions[4].style.backgroundColor = "#eccde2";
        pions[8].style.backgroundColor = "#eccde2";
        return true;
    }
    if (pions[2].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#eccde2";
        pions[4].style.backgroundColor = "#eccde2";
        pions[6].style.backgroundColor = "#eccde2";
        return true;
    }
}
