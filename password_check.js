function passwords() {
    var pswd1 = document.getElementById("pswd1").value;
    var pswd2 = document.getElementById("pswd2").value;

    if (pswd1.length < 8){
        alert("Your password (1) must be at least 8 characters long!")
    } else if (pswd2.length < 8){
        alert("Your password (2) must be at least 8 characters long!")
    } else if (pswd1 != pswd2) {
        alert("The passwords are not the same!")
    } else {
        alert("This is a valid password. Good job!")
    }
}
