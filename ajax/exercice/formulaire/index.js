const genre = document.getElementById('genre');
const lastName = document.getElementById('name');
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const mdp = document.getElementById('mdp');
const confirmMdp = document.getElementById('confirmMdp');
const describ = document.getElementById('describ');

const jumbo =document.getElementById('jumbo');

const caract = document.querySelector('.caracteres');
const caract_ok = document.querySelector('.caracteres_ok');
const caract_pas_ok = document.querySelector('.caracteres_pas_ok');

const chiffre = document.querySelector('.chiffre');
const chiffre_ok = document.querySelector('.chiffre_ok');
const chiffre_pas_ok = document.querySelector('.chiffre_pas_ok');

const majuscule = document.querySelector('.majuscule');
const majuscule_ok = document.querySelector('.majuscule_ok');
const majuscule_pas_ok = document.querySelector('.majuscule_pas_ok');


var reg_inscription = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
let url = './rest/index.php';

genre.addEventListener('change', () => {
    const genreSelect = genre.selectedIndex;
    console.log(genreSelect)
    if(genreSelect === 0){
        console.log('Vous devez choisir');
    } else if(genreSelect === 1) {
        console.log('Vous êtes un homme');
    } else if(genreSelect === 2) {
        console.log('Vous êtes une femme')
    } else {
        console.log('Vous êtes autre chose !')
    }
});

lastName.addEventListener('keyup', () => {
    let nameVal = lastName.value;
    console.log(nameVal)
})

firstName.addEventListener('input', () => {
    let firstNameVal = firstName.value;
    console.log(firstNameVal)
})

email.addEventListener('input', () => {
    let emailVal = email.value;
    console.log(emailVal)
})

jumbo.style.visibility = "hidden";
jumbo.style.display = "none";
mdp.addEventListener('click', () => {
    jumbo.style.visibility = "visible";
    jumbo.style.display = "block";
})


mdp.addEventListener('keyup', () =>{
    var exp1 = /[0-9]{1,}/g; //contient au moins 1 chiffre 
    var exp2 = /[A-Z]{1,}/g; //contient au moins 1 majuscule

    if(mdp.value.length < 8){
        caract.style.color = "#a81b18";
        caract_ok.style.visibility = "hidden";
        caract_ok.style.visibility = "none";
        caract_pas_ok.style.visibility = "visible";
        caract_pas_ok.style.visibility = "block";
    }else{
        caract.style.color = "green";
        caract_ok.style.visibility = "visible";
        caract_ok.style.visibility = "block";
        caract_pas_ok.style.visibility = "hidden";
        caract_pas_ok.style.visibility = "none";
    }
    if(!exp1.test(mdp.value)){
        chiffre.style.color = "#a81b18";
        chiffre_ok.style.visibility = "hidden";
        chiffre_ok.style.visibility = "none";
        chiffre_pas_ok.style.visibility = "visible";
        chiffre_pas_ok.style.visibility = "block";
    }else{
        chiffre.style.color = "green";
        chiffre_ok.style.visibility = "visible";
        chiffre_ok.style.visibility = "block";
        chiffre_pas_ok.style.visibility = "hidden";
        chiffre_pas_ok.style.visibility = "none";
    }
    if(!exp2.test(mdp.value)){
        majuscule.style.color = "#a81b18";
        majuscule_ok.style.visibility = "hidden";
        majuscule_ok.style.visibility = "none";
        majuscule_pas_ok.style.visibility = "visible";
        majuscule_pas_ok.style.visibility = "block";
    }else{
        majuscule.style.color = "green";
        majuscule_ok.style.visibility = "visible";
        majuscule_ok.style.visibility = "block";
        majuscule_pas_ok.style.visibility = "hidden";
        majuscule_pas_ok.style.visibility = "none";
    }

    if( mdp.value == ''){
        mdp.style.borderBottom = "1px solid #ced4da";
        mdp.style.color = "#495057";
        caract.style.color = "#495057";
        chiffre.style.color = "#495057";
        majuscule.style.color ="#495057";
        caract_pas_ok.style.visibility = "hidden";
        caract_pas_ok.style.visibility = "none";
        chiffre_pas_ok.style.visibility = "hidden";
        chiffre_pas_ok.style.visibility = "none";
    }else{
        var regPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
        if (regPassword.test(mdp.value)) {
            mdp.style.colorBottom = "1px solid green";
            mdp.style.color ="green";
        } else {
            mdp.style.colorBottom = "1px solid #a81b18";
            mdp.style.color = "#a81b18";
        }
    }

});

confirmMdp.addEventListener('keyup', () => {
    if(confirmMdp.value != mdp.value){
        document.querySelector(".identique_ok").style.visibility = "hidden";
        document.querySelector('.identique_ok').style.visibility = "none";
        document.querySelector('.identique_pas_ok').style.visibility = "visible";
        document.querySelector('.identique_pas_ok').style.visibility = "block";
        document.querySelector('.identique_pas_ok').style.color = "#a81b18";
        document.querySelector('.identique').style.color = "#a81b18";
    } else {
        document.querySelector('.identique_pas_ok').style.visibility = "hidden";
        document.querySelector('.identique_pas_ok').style.visibility = "none";
        document.querySelector(".identique_ok").style.visibility = "visible";
        document.querySelector('.identique_ok').style.visibility = "block";
        document.querySelector('.identique_ok').style.color = "green";
        document.querySelector('.identique').style.color = "green";
    }
});


let handleFormSubmit = (evt) => {
    evt.preventDefault();
    //verif prénom et nom

    //verif email
    
    //verif password 

    //verif confirmPassword

    // argument de la function fetch
    const options = {
        method : 'post',
        body : JSON.stringify({
            genre: genre.value,
            lastname: lastName.value,
            firstname: firstName.value,
            email: email.value,
            password: mdp.value,
            confirmMdp: confirmMdp.value,
            describ: describ.value
        })
    }
    fetch(url,options).then(resp => resp.text()).then(text => console.log(text))
}
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);