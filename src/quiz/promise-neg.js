function hasNegative(row) {
    return new Promise(function (resolve) {
        var containsNegative = row.some(function (value) { return value < 0; });
        resolve(containsNegative);
    });
}
function logRowsWithNegatives(arr) {
    // Map each row to a promise that checks for a negative number
    var negativeCheckPromises = arr.map(function (row, index) {
        return hasNegative(row).then(function (hasNeg) {
            if (hasNeg) {
                console.log("Row ".concat(index, " has at least one negative number:"), row);
            }
        });
    });
    // Use Promise.all to handle all row checks concurrently
    return Promise.all(negativeCheckPromises).then(function () {
        console.log('Finished checking all rows for negative numbers.');
    });
}
var array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
logRowsWithNegatives(array2D_3).catch(function (error) {
    console.error('Error:', error);
});
