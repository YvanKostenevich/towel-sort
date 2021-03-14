// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix === undefined){
        return [];
    }
    let finalArray = [];

    for (let i = 0; i < matrix.length; i++) {

        if (i % 2 !== 0) {
            finalArray.push(matrix[i].reverse());
        } else {
            finalArray.push(matrix[i]);
        }

    }

    return finalArray.flat();
}
