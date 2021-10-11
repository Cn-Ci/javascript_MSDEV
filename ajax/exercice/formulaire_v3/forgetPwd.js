const validateFormData =(plainFormData) => {
    const errorMessages = {};
    for(const key in plainFormData){
        let currentValue = plainFormData[key];
        if(key =='email'){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            errorMessages[key] = !currentValue.match(regex) ?'saisie invalide !' : '';
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
        fetch("rest/forgetPwd.php", options).then(resp => resp.text()).then(text => {
            if(text != 'false'){
                const message = '<div>votre nouveau mot de passe est : <b class="text-primary">'+ text +'</b>(Noublier pas de bien noté votre nouveau mot de passe)</div>'
                const validationButton = 
                `<a class="btn btn-success btn-lg" href="login.html">
                    Vous connecter 
                </a>`;
                document.getElementById('ForgetPassForm').classList.add('d-none');
                document.getElementById("NewPassWord").innerHTML += message;
                setTimeout(()=>{
                    document.getElementById("NewPassWord").innerHTML += validationButton;
                },2000);
            }
        
        });
    }
}
document.getElementById("ForgetPassForm").addEventListener('submit',handleRegistrationFormSubmit);

const handleInputChange = (evt) =>{
    const obj ={};
    obj[evt.currentTarget.id] = evt.currentTarget.value;
    validateFormData(obj);
    //si evt.currentTarget.id = email fetch
}
const allInputsValues = {};
document.querySelectorAll('#ForgetPassForm input').forEach(inputElement =>{
    inputElement.addEventListener('change', handleInputChange);
    allInputsValues[inputElement.id]=false;
})
function isValidForm() {
    let isValid = Object.values(allInputsValues).every(item => {return item});
    if(isValid){
        document.querySelector("#ForgetPassForm #submitBtn").removeAttribute("disabled");
    }
    else{
        document.querySelector("#ForgetPassForm #submitBtn").setAttribute("disabled",true);
    }
    return isValid;
}
