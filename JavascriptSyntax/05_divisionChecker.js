

function divisionBy3(number) {
    if (number < 100) {
        var sum = number % 10 + Math.floor(number / 10);
        if (sum % 3 == 0) {
            console.log("the number is divided by 3 without remainder");
        }
        else {
            console.log("the number is not divided by 3 without remainder");
        }
    }

    else if (number < 1000) {
        var sum = number % 10 + Math.floor(number/10) % 10 + Math.floor(number / 100);
        if (sum % 3 == 0) {
            console.log("the number is divided by 3 without remainder");
        }
        else {
            console.log("the number is not divided by 3 without remainder");
        }
    }

}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);