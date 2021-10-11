const validateFormData =(plainFormData) => {
    const errorMessages = {};
    for(const key in plainFormData){
        let currentValue = plainFormData[key];
        if(key =='email'){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            errorMessages[key] = !currentValue.match(regex) ?'saisie invalide !' : '';
        }
        if(key === 'password'){
            errorMessages[key] = currentValue.length < 6 || currentValue.trim() === '' ? 'saisie invalide !' : '';
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
        fetch("rest/login.php", options).then(resp => resp.text()).then(text => {
            if(text!='false'){
                let json = JSON.parse(text);
                console.log(json);
                localStorage.setItem('User',text);
                location.replace('account.html');
            }
            else{
                const message ="l'email ou le mot de passe que vous avais saisie est incorrec veuillez saisir des information valide ou<a href='index.html'> vous pouvais vous inscrire</a>"
                document.getElementById('Error').innerHTML += message;
            }
        });
    }
}
document.getElementById("loginForm").addEventListener('submit',handleRegistrationFormSubmit);

const handleInputChange = (evt) =>{
    const obj ={};
    obj[evt.currentTarget.id] = evt.currentTarget.value;
    validateFormData(obj);
    //si evt.currentTarget.id = email fetch
}
const allInputsValues = {};
document.querySelectorAll('#loginForm input').forEach(inputElement =>{
    inputElement.addEventListener('change', handleInputChange);
    allInputsValues[inputElement.id]=false;
})
function isValidForm() {
    let isValid = Object.values(allInputsValues).every(item => {return item});
    if(isValid){
        document.querySelector("#loginForm #submitBtn").removeAttribute("disabled");
        document.getElementById("Error").innerHTML="";
    }
    else{
        document.querySelector("#loginForm #submitBtn").setAttribute("disabled",true);
    }
    return isValid;
}
console.log(localStorage.getItem('User'));

//mdp : ereqh5obf;