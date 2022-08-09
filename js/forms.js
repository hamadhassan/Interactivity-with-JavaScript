function valpas(){
    var email=document.getElementById("email");
    var emailCofirm=document.getElementById("email-confirm");
    if(email.value==emailCofirm.value){
        alert("Email matched")
        return true;
    }else{
        alert("Email not matched");
    }
}