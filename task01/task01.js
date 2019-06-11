var num = prompt('Enter some number', '');
if (isNaN(num)) {
    do {
        var num = prompt('Hey! I said some NUMBER!', '');
    } while (isNaN(num));
    checkTheNum(num)
}
else {
    checkTheNum(num)
}

function checkTheNum() {
    if (num == 0) {
        alert('0');
    }
    else if (num > 0) {
        alert('1');
    }
    else {
        alert('-1');
    }
}