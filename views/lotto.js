function drawing() {
    var numbers = [];
    for (var i = 0; i < 6; i++) {
        var ran = Math.floor(Math.random() * 45) + 1;
        if (numbers.indexOf(ran) === -1) {
            numbers.push(ran);
        } else {
            i -= 1;
        }
    }
    document.getElementById("ball1").innerHTML = numbers[0];
    document.getElementById("ball2").innerHTML = numbers[1];
    document.getElementById("ball3").innerHTML = numbers[2];
    document.getElementById("ball4").innerHTML = numbers[3];
    document.getElementById("ball5").innerHTML = numbers[4];
    document.getElementById("ball6").innerHTML = numbers[5];



}