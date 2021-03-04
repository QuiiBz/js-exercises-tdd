const greetPeople = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  // Arrange
  // Act
  // Assert
    const peoples = ['Tom', 'Jean', 'Pierre'];
    const expected = 'Hello TomJeanPierre';

    expect(greetPeople(peoples)).toEqual(expected);
});
