var user = prompt("Who's there?", "");

switch (user) {
    case "Admin":
    var password = prompt("Password?", "*****");
    
    switch (password){
        case "TheMaster":
        alert("Welcome!");
        break;

        case null:
        alert("Canseled");
        break;

        default:
        alert("Wrong password")
    }
    break;

    case null:
    alert("Canseled");
    break;

    default:
    alert("I don't know you")
}