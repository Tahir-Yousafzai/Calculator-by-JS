

var firstDigit = +prompt("Enter Your First Number");
document.write(firstDigit + " ");

var opp = prompt("Assign Your Opperator");
document.write(opp + " ");

var secondDigit = +prompt("Enter Your Second Number");
document.write(secondDigit + " ");

document.write("=" + " ");

if (opp === "+") {
    document.write(firstDigit + secondDigit);
}
else if (opp === "-") {
    document.write(firstDigit - secondDigit);
}
else if (opp === "/") {
    document.write(firstDigit / secondDigit);
}
else if (opp === "*") {
    document.write(firstDigit * secondDigit);
} else {
    alert("Kindly fill input field");
}




