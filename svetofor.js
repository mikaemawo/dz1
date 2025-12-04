let color = prompt("Введите цвет светофора: red, yellow или green");

document.getElementById("l_red").style.background = "gray";
document.getElementById("l_yellow").style.background = "gray";
document.getElementById("l_green").style.background = "gray";

if (color === "red") {
    document.getElementById("l_red").style.background = "red";
    document.getElementById("resultText").innerHTML = "STOP";
}

if (color === "yellow") {
    document.getElementById("l_yellow").style.background = "yellow";
    document.getElementById("resultText").innerHTML = "WAIT";
}

if (color === "green") {
    document.getElementById("l_green").style.background = "green";
    document.getElementById("resultText").innerHTML = "GO";
}