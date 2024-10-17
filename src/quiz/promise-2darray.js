function sum2DArray(arr) {
    return new Promise(function (resolve, reject) {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            reject('Cannot sum an empty array');
            return; // Ensure no further code executes if rejected
        }
        setTimeout(function () {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    console.log("Adding ".concat(arr[i][j], " to sum"));
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}
var array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2DArray(array2D)
    .then(function (result) {
    console.log('Result for sumPromise1:', result);
})
    .catch(function (error) {
    console.error('Error for sumPromise1:', error);
});
sum2DArray([])
    .then(function (result) {
    console.log('Result for sumPromise2:', result);
})
    .catch(function (error) {
    console.error('Error for sumPromise2:', error);
});
