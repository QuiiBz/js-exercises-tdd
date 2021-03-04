const VALUE_TO_OLD_ROMAN = [
    {
        value: 1000,
        roman: 'M',
    },
    {
        value: 500,
        roman: 'D',
    },
    {
        value: 100,
        roman: 'C',
    },
    {
        value: 50,
        roman: 'L',
    },
    {
        value: 10,
        roman: 'X',
    },
    {
        value: 5,
        roman: 'V',
    },
    {
        value: 1,
        roman: 'I',
    },
];

const VALUE_TO_NEW_ROMAN = [
    ...VALUE_TO_OLD_ROMAN,
    {
        value: 900,
        roman: 'CM',
    },
    {
        value: 400,
        roman: 'CD',
    },
    {
        value: 90,
        roman: 'XC',
    },
    {
        value: 40,
        roman: 'XL',
    },
    {
        value: 9,
        roman: 'IX',
    },
    {
        value: 4,
        roman: 'IV',
    },
];

VALUE_TO_NEW_ROMAN.sort((a, b) => b.value - a.value);

//console.log(VALUE_TO_NEW_ROMAN);

const convert = (value, array) => {

    let currentValue = value;
    let roman = '';

    const nextValue = () => {

        for(let { value, roman } of array) {

            if(currentValue >= value) {

                currentValue -= value;
                return roman;
            }
        }
    }

    while(currentValue !== 0)
        roman += nextValue();

    return roman;
}

module.exports = {
    convertToOldRoman: (value) => convert(value, VALUE_TO_OLD_ROMAN),
    convertToNewRoman: (value) => convert(value, VALUE_TO_NEW_ROMAN),
};
