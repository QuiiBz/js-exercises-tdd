// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function getAverage(array) {

    const numbers = array.filter((current) => typeof current === 'number');
    return numbers.reduce((acc, number) => acc + number) / numbers.length;
}

module.exports = getAverage;
