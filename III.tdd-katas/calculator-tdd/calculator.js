module.exports = (value) => {

    if(value === '')
        return 0;

    const delimiter = getDelimiter(value) || ',';

    const numbers = value
        .trim()
        .replace(`//${delimiter}`, '')
        .replaceAll(/\\n/g, delimiter)
        .split(delimiter);

    if(numbers.some(isNegative))
        throw new Error(`negatives not allowed: ${numbers
            .filter(isNegative)
            .join(',')}`);

    return numbers
        .map((current) => parseInt(current))
        .filter((current) => current <= 1000)
        .reduce((acc, current) => acc + current);
}

const DELIMITER = /^\/\/(.?)/;

const getDelimiter = (value) => {

    const groups = value.match(DELIMITER, '');

    if(groups)
        return groups[1];
}

const isNegative = number => number < 0;