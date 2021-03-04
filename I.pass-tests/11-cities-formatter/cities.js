function cities(capitals, transform) {

    return capitals.map((capital) => transform(capital));
}

module.exports = cities;
