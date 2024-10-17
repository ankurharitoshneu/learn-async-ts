function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        let rowSum = 0;
        for (let value of row) {
            rowSum += value;
        }
        resolve(rowSum);
    });
}

function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        return Promise.reject('Cannot sum an empty array');
    }

    // Map each row to a sumRow promise
    const rowPromises = arr.map(row => sumRow(row));

    // Use Promise.all to sum all rows concurrently
    return Promise.all(rowPromises).then(rowSums => {
        return rowSums.reduce((total, rowSum) => total + rowSum, 0);
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayConcurrent(array2D_1)
    .then(result => {
        console.log('Result for sum2DArrayConcurrent:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
