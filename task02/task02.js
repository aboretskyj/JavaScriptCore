c

if (user == "Admin"){
    var password = prompt("Password?", "*****");
    if (password == "TheMaster"){
        alert("Welcome!");
    }
    else if (password == null){
        alert("Canseled")
    }
    else {
        alert("Wrong password")
    }
}
else if (user == null){
    alert("Canseled")
}
else {
    alert("I don't know you")
}