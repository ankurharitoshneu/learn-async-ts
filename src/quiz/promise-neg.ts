function hasNegative(row: number[]): Promise<boolean> {
    return new Promise((resolve) => {
        const containsNegative = row.some(value => value < 0);
        resolve(containsNegative);
    });
}

function logRowsWithNegatives(arr: number[][]): Promise<void> {
    // Map each row to a promise that checks for a negative number
    const negativeCheckPromises = arr.map((row, index) => {
        return hasNegative(row).then(hasNeg => {
            if (hasNeg) {
                console.log(`Row ${index} has at least one negative number:`, row);
            }
        });
    });

    // Use Promise.all to handle all row checks concurrently
    return Promise.all(negativeCheckPromises).then(() => {
        console.log('Finished checking all rows for negative numbers.');
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D_3).catch(error => {
    console.error('Error:', error);
});
