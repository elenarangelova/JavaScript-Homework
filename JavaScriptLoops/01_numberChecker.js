function printNumbers(number) {
    if (number > 0) {
        var result = '';
        for (var i = 1; i <= number; i++) {
            if ((i % 4) != 0 && (i % 5) != 0) {
                result += i + ', ';
            }
        }
        console.log(result);
    } else {
        console.log('no');
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
