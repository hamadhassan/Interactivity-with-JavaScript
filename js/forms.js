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
function nicknameFunction(){
    if (yesNick.checked){
  nick.style.display="inline";
  nickname.setAttribute('required',true);
    }
    else{ 
        nickname.removeAttribute('required');
        nick.style.display="none";
    }
}