var fortune = ["Better Luck Next Time", "Your going to have a good day", "Your house will catch on fire", "Look behind you", "You will find a bag of money",
    "Git init"];

function GetRando() {
    var num = Math.round(Math.random() * (fortune.length - 1));
    return num;
}

function GetFortune() {
    document.getElementById("fortune").innerHTML = fortune[GetRando()];
}
