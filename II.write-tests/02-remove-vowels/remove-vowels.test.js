const removeVowels=  require('./remove-vowels');

test("remove vowels from word", function() {

    const word = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const expected = '_o_e__i__u___o_o___i__a_e____o__e__e_u__a_i_i__i___e_i____e___o_eiu__o___e__o__i__i_i_u___u___a_o_e_e___o_o_e__a__a_a_i_ua_';

    expect(removeVowels(word)).toEqual(expected);
});
