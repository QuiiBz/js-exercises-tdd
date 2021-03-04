function carSales(cars) {

    const totals = {};

    cars.forEach((car) => {

        const current = totals[car.make];

        current ? totals[car.make] += car.price : totals[car.make] = car.price;
    });

    return totals;
}

module.exports = carSales;

