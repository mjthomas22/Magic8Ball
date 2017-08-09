var fortune = ["Better\n Luck \nNext Time", "Your \ngoing to \nhave a \ngood day", "Your \nhouse will \ncatch \non fire", "Look \nbehind you", "You \nwill find \na bag of \nmoney",
    "Git init"];

function GetRando() {
    var num = Math.round(Math.random() * (fortune.length - 1));
    return num;
}

function GetFortune() {
    setTimeout(function () {
        document.getElementById("fortune").innerHTML = fortune[GetRando()];
    }, 1000);
    setTimeout(function () {
        document.getElementById("fortune").innerHTML = "";
    }, 2550);
}
