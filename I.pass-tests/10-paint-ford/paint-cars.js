function paintCars(cars, color) {

    const copy = JSON.parse(JSON.stringify(cars));
    copy[0].colour = color;

    return copy;
}

module.exports = paintCars;
