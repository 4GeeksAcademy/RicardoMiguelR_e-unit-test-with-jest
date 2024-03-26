const { sum } = require ('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
  
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
  
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
  
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
  });

  test("One dollar should be 156.5 yenes", function() {
    const { fromDollartoYen } = require('./app.js');
    const yenes = fromDollartoYen(7.5);
    const expected = 7.5 * 156.5;
    expect(fromDollartoYen(7.5)).toBe(1173.75);
  });

  test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(6);
    const expected = 6 * 0.87;
    expect(fromYenToPound(6)).toBe(5.22);
  });