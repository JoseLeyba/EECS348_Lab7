function colors() {
    var boR = document.getElementById("BoR").value;
    var boG = document.getElementById("BoG").value;
    var boB = document.getElementById("BoB").value;
    var Width = document.getElementById("Width").value;
    var baR = document.getElementById("BaR").value;
    var baG = document.getElementById("BaG").value;
    var baB = document.getElementById("BaB").value;

    var changing = document.getElementById("BobTheHungryText");
    changing.style.borderColor = `rgb(${boR},${boG},${boB})`;
    changing.style.borderWidth = Width
    changing.style.backgroundColor = `rgb(${baR},${baG},${baB})`;
}
