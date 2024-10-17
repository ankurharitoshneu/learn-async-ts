function sumRow(row) {
    return new Promise(function (resolve) {
        var rowSum = 0;
        for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
            var value = row_1[_i];
            rowSum += value;
        }
        resolve(rowSum);
    });
}
function sum2DArrayConcurrent(arr) {
    if (arr.length === 0) {
        return Promise.reject('Cannot sum an empty array');
    }
    // Map each row to a sumRow promise
    var rowPromises = arr.map(function (row) { return sumRow(row); });
    // Use Promise.all to sum all rows concurrently
    return Promise.all(rowPromises).then(function (rowSums) {
        return rowSums.reduce(function (total, rowSum) { return total + rowSum; }, 0);
    });
}
var array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2DArrayConcurrent(array2D_1)
    .then(function (result) {
    console.log('Result for sum2DArrayConcurrent:', result);
})
    .catch(function (error) {
    console.error('Error:', error);
});
