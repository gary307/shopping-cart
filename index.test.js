var { addToBasket, removeFromBasket } = require('./index.js');

//test 1
var testItem = { name: 'item 1', price: '30', basket: 0 };

//test 2
var testItem2 = { name: 'item 1', price: '30', basket: 2 };

test('updates basket', () => {
  expect(addToBasket(testItem)).toBe(1);
});

test('removes item from basket', () => {
  expect(removeFromBasket(testItem2)).toBe(1);
});
