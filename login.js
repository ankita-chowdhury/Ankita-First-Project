
function btnClick(){
    const checkBox=document.getElementById("check");
    const emailValue=document.getElementById("email");
    const passValue=document.getElementById("pass");

    console.log("email",emailValue.value,"password",passValue.value);
    if(checkBox.checked){
        emailChange(emailValue.value);
        passChange(passValue.value);
        document.getElementById("check-error").style.display="none";
    }
    else{
        document.getElementById("check-error").style.display="block";
        emailChange(emailValue.value);
        passChange(passValue.value);
        setTimeout(()=>{
            document.getElementById("check-error").style.display="none";
        },5000);
    }
}



function emailChange(value){
    const emailErr=document.getElementById("email-error");
    if(value.length==0){
        emailErr.style.display="block";
        setTimeout(()=>{
            emailErr.style.display="none";
        },5000)
    }
    else{
        emailErr.style.display="none";
    }

}
function passChange(value){
    const passErr=document.getElementById("pass-error");
    if(value.length <=7){
        passErr.style.display="block";
        setTimeout(()=>{
            passErr.style.display="none";
        },5000);
    }
    else{
        passErr.style.display="none";
    }

}

