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
    for (var i = 0; i < 6; i++) {
        document.write(numbers[i] + " ");
    }
}
