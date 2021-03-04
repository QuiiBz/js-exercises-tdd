const removeVowelsInArray = require('./remove-vowels-in-array');

test("remove vowels from all words in array", function() {

    const array = ["Irina", "Etza", "Daniel"];
    const expected = ["__i_a", "___a", "_a_ie_"];

    expect(removeVowelsInArray(array)).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
