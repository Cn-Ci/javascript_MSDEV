// Exercice : réaliser un formulaire d'inscription avec nom, prénom, email, mot de passe (+confirmation) 
//et envoyer le contenu de ce formulaire en post vers une page php qui enverra en réponse ce qu'elle a reçu (au format json)
// Dans un 2ème temps réaliser la validation des données côté JS

// let url ="/js_et_php_async_JSON/rest/index.php";
// let form = document.getElementById("jsonpost");
// form.addEventListener("submit", (evt)=>{
//     evt.preventDefault();
//  let email= document.getElementById('exampleInputEmail1').value;
//  let password = document.getElementById('InputPassword1').value;
//  let confPassword = document.getElementById('InputPassword2').value;
//  let isValide=true;

//     if (password.length < 4){
//         document.getElementById('PasswordErrors').removeAttribute('hidden');
//         isValide=false;
//     }
//     else{
//         document.getElementById('PasswordErrors').setAttribute('hidden',false);
//     }

//     if(password!=confPassword){
//         document.getElementById('Passwordinc').removeAttribute('hidden');
//         document.getElementById('confPasswordinc').removeAttribute('hidden');
//         isValide=false;
//     }

//     else{
//         document.getElementById('confPasswordinc').setAttribute('hidden',false);
//         document.getElementById('Passwordinc').setAttribute('hidden',false);
//     }

//     if (email =="" || email==" "){
//         document.getElementById('emailErrors').removeAttribute('hidden');
//         isValide=false;
//     }

//     else{
//         document.getElementById('emailErrors').setAttribute('hidden',false);
//     }

//     if (isValide==true) {
//         document.getElementById('emailErrors').setAttribute('hidden',false);
//         document.getElementById('confPasswordinc').setAttribute('hidden',false);
//         document.getElementById('Passwordinc').setAttribute('hidden',false);
//         document.getElementById('PasswordErrors').setAttribute('hidden',false);
        
//         let User={
//             mail: email,
//             pw : password,
//             confpw:confPassword
//         };

//         let options={
//             method:"post",
//             body:JSON.stringify(User)
//         };

//         fetch(url, options).then(resp=>resp.json()).then(json=>console.log(json));
//     }
// });
const validateFormData =(plainFormData) => {
    const errorMessages = {};
    for(const key in plainFormData){
        let currentValue = plainFormData[key];
        if(key === 'firstName' || key === 'lastName'){
            const regex = /^([^0-9]*)$/;
            errorMessages[key] = currentValue.length < 1 ||
                                 currentValue.trim() ==='' ||
                                 !currentValue.match(regex) ?'saisie invalide !' : '';
        }
        if(key =='email'){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            errorMessages[key] = !currentValue.match(regex) ?'saisie invalide !' : '';
        }
        if(key === 'password'){
            errorMessages[key] = currentValue.length < 6 || currentValue.trim() === '' ? 'saisie invalide !' : '';
            validateFormData({'pwConfirm':document.querySelector('#registrationForm input#pwConfirm').value})
        }
        if(key === 'pwConfirm'){
            const passwordInputValue = document.querySelector('#registrationForm input#password').value;
            errorMessages[key] = currentValue !==(plainFormData['password'] || passwordInputValue) || currentValue.trim()=== '' ? 'saisie invalide !' : '';
        }
        if(key ==='tosCheck'){
            const tosCheckInputValue = document.querySelector('#registrationForm input#tosCheck').checked;
            errorMessages[key] = !tosCheckInputValue ? 'Agree ToS please !' : '';
        }

    }
    for(const errorsKey in errorMessages){
        const errorMsgElt = document.getElementById(`${errorsKey}ErrorMsg`);
        const errorMsg = errorMessages[errorsKey];
        errorMsgElt.innerText = errorMsg;
        allInputsValues[errorsKey] = errorMsg ==='';
    }
    return isValidForm();
    
}
import {Extenders} from "./Extenders";
Extenders.init();

const handleRegistrationFormSubmit=(evt) =>{
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    let plainFormData = Object.fromEntries(formData.entries());
    plainFormData.tosCheck = plainFormData.tosCheck ? true : false;
    if(validateFormData(plainFormData)){
        const formDataJsonString = JSON.stringify(plainFormData);
        const options={
            method : 'post',
            body : formDataJsonString
        }
        fetch("rest/index.php", options).then(resp => resp.text()).then(text => {
            console.log(text);
            const json =JSON.tryParse(text);
            console.log(json);
            const json2 = text.tryParseToJson();
            console.log(json2);
            if(json.token){
                const message = '<div>Pour finaliser votre inscription, consultez votre boîte mail.</div>'
                const validationButton = 
                `<a class="btn btn-success btn-lg" href="rest/index.php?t=${encodeURIComponent(json.token)}">
                    Confirmez Inscription
                </a>`;
                document.getElementById('registrationForm').classList.add('d-none');
                document.getElementById("validationMail").innerHTML += message;
                setTimeout(()=>{
                    document.getElementById("validationMail").innerHTML += validationButton;
                },2000);
            }
//eyJlbWFpbCI6ImJlZHVsYXVyZW50QGdtYWlsLnd3eCIsInRva2VuX2RhdGUiOiIyMDIxLTEwLTA2IDA4OjE4OjA2In0%3D%24dWtaLm5xd24zS0JLazNMdQ%24h%2ByXLzVcdE7hoTMxHCynrMkMP%2BzlZEuYg95xmqAdGD0

            
        });
    }
}

document.getElementById("registrationForm").addEventListener('submit',handleRegistrationFormSubmit);

const handleInputChange = (evt) =>{
    const obj ={};
    obj[evt.currentTarget.id] = evt.currentTarget.value;
    validateFormData(obj);
    //si evt.currentTarget.id = email fetch
    if(evt.currentTarget.id == 'email'){
        const mail = JSON.stringify(obj);
        const options={
            method :"post",
            body: mail
        }

        fetch("rest/checkEmail.php", options).then(resp => resp.text()).then(text => {
            const json = JSON.parse(text);
            allInputsValues['email'] = json;
            document.getElementById("emailErrorMsg").innerText = json ? '' : 'saisie invalide !';
            isValidForm();
           // document.getElementById("registrationForm").addEventListener('submit',handleRegistrationFormSubmit);
        });

    }
}
const allInputsValues = {};
document.querySelectorAll('#registrationForm input').forEach(inputElement =>{
    inputElement.addEventListener('change', handleInputChange);
    allInputsValues[inputElement.id]=false;
})
function isValidForm() {
    let isValid = Object.values(allInputsValues).every(item => {return item});
    if(isValid){
        document.querySelector("#registrationForm #submitBtn").removeAttribute("disabled");
    }
    else{
        document.querySelector("#registrationForm #submitBtn").setAttribute("disabled",true);
    }
    return isValid;
}