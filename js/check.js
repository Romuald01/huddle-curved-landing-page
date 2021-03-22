

function validateForm(){
    var email = document.getElementById('email').value;
    var invalidMailErrorMessage  = "Check your email please";
    var invalidAtMessage  = "invalid position";

    if(email == ""){
        document.getElementById("showError").innerHTML = "fill this field";
        return false;
    }
        else if(email.indexOf('@')  <= 0){
        document.getElementById("showError").innerHTML = invalidAtMessage;

        return false;
    }
    else if(email.chartAt(email.length-4) != "." && (email.chartAt(email.length-3) != '.')){
        document.getElementById("showError").innerHTML = invalidMailErrorMessage;

        return false;
    }

}