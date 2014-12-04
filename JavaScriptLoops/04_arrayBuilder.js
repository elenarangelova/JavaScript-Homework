
createArray(20);

function createArray(n) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr[i] = i * 5;
    }
    console.log(arr.join(' '));
}