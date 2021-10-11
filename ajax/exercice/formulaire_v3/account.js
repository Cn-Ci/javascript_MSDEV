// console.log(localStorage.getItem('User'));
const options={
    method : 'post',
    body : localStorage.getItem('User')
};

fetch("rest/account.php", options).then(resp => resp.text()).then(text => {
    
    let info = JSON.parse(text);
    let userInfo = Object.values(info); 
    let firstName = userInfo[0];
    let lastName = userInfo[1];
    let email = userInfo[2];
    // userInfo.forEach(item => {
    //     document.getElementById("infoUser").innerHTML+="<div>"+item+"</div>"   
    // });
    let afficheInfo = document.getElementById('infoUser');
    afficheInfo.innerHTML= "<b>Bonjour et bienvenu :</b> " +firstName+" "+lastName+"<div><b>votre addresse Mail est :</b> "+email+"</div>"+"</br><div class='d-flex justify-content-center mx-4 mb-3 mb-lg-4'><button id='ChangePwdBtn' type='submit' class='btn btn-primary btn-lg'>Change password</button></div>";

    document.getElementById('ChangePwdBtn').addEventListener('click', afficheForm);
console.log(text);
});

const afficheForm =()=>{
    document.getElementById('accountSect').style.display="";
    document.getElementById("changePasswordForm").addEventListener('submit',handleRegistrationFormSubmit);
};

const validateFormData =(plainFormData) => {
    const errorMessages = {};
    for(const key in plainFormData){
        let currentValue = plainFormData[key];
        if(key === 'password'){
            errorMessages[key] = currentValue.length < 6 || currentValue.trim() === '' ? 'saisie invalide !' : '';
            validateFormData({'pwConfirm':document.querySelector('#changePasswordForm input#pwConfirm').value})
        }
        if(key === 'pwConfirm'){
            const passwordInputValue = document.querySelector('#changePasswordForm input#password').value;
            errorMessages[key] = currentValue !==(plainFormData['password'] || passwordInputValue) || currentValue.trim()=== '' ? 'saisie invalide !' : '';
        }

    }
    for(const errorsKey in errorMessages){
        const errorMsgElt = document.getElementById(`${errorsKey}ErrorMsg`);
        const errorMsg = errorMessages[errorsKey];
        errorMsgElt.innerText = errorMsg;
        allInputsValues[errorsKey] = errorMsg ==='';
    }
    return isValidForm();
    
};

const handleRegistrationFormSubmit=(evt) =>{
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    let plainFormData = Object.fromEntries(formData.entries());
    plainFormData.action = "changePwd";
    plainFormData.token = JSON.parse(localStorage.getItem('User')).token; 
    if(validateFormData(plainFormData)){
        const formDataJsonString = JSON.stringify(plainFormData);
        const options={
            method : 'post',
            body : formDataJsonString
        }
        fetch("rest/account.php", options).then(resp => resp.text()).then(text => {
            document.getElementById('success').innerText=text;
            document.getElementById('conncetBtn').innerHTML="<a href='login.html' class='btn btn-primary btn-lg'>Log in</a>";
        });
    }
};
function Redirect(){

}
const handleInputChange = (evt) =>{
    const obj ={};
    obj[evt.currentTarget.id] = evt.currentTarget.value;
    validateFormData(obj);
    //si evt.currentTarget.id = email fetch
}
const allInputsValues = {};
document.querySelectorAll('#changePasswordForm input').forEach(inputElement =>{
    inputElement.addEventListener('change', handleInputChange);
    allInputsValues[inputElement.id]=false;
})
function isValidForm() {
    let isValid = Object.values(allInputsValues).every(item => {return item});
    if(isValid){
        document.querySelector("#changePasswordForm #submitBtn").removeAttribute("disabled");
    }
    else{
        document.querySelector("#changePasswordForm #submitBtn").setAttribute("disabled",true);
    }
    return isValid;
}