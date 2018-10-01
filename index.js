const shoppingFunction = function() {
  //initial variables
  var shoppingItems = [
      { name: 'The SlimCase', price: '8.99', basket: 0 },
      { name: 'MOO Hardcover Hotebook', price: '14.99', basket: 0 },
      { name: 'MOO Softcover JOurnal', price: '5.75', basket: 0 }
    ],
    basketList = document.getElementById('basket'),
    shoppingCart = document.getElementById('shoppingCart'),
    totalContainer = document.getElementById('totalPrice'),
    totalPrice = 0;

  //add item to basket
  function addToBasket(item) {
    item.basket++;
    updateBasket();
    updateTotal(shoppingItems);

    //return value for testing
    return item.basket;
  }

  //remove item from basket
  function removeFromBasket(item) {
    item.basket--;
    updateBasket();
    updateTotal(shoppingItems);

    //return value for testing
    return item.basket;
  }

  //update total value
  function updateTotal(items) {
    let newTotal = 0;

    shoppingItems.map(item => {
      newTotal += item.price * item.basket;
    });

    totalPrice = newTotal.toFixed(2);

    //checks if dom element exists, if so update it
    if (totalContainer) {
      totalContainer.innerHTML = totalPrice;
    }
  }

  //updates the basket in the dom, only runs if the dom exists
  function updateBasket() {
    if (basketList) {
      basketList.innerHTML = '';
      shoppingItems.map(item => {
        if (item.basket > 0) {
          let newItem = document.createElement('div');
          newItem.innerHTML = `${item.name} : amount ${item.basket}`;
          newItem.addEventListener('click', removeFromBasket.bind(this, item));
          basketList.appendChild(newItem);
        }
      });
    }
  }

  //inital shopping items added to dom in load
  shoppingItems.map(item => {
    let newItem = document.createElement('div');
    newItem.innerHTML = `${item.name} : £${item.price}`;
    newItem.addEventListener('click', addToBasket.bind(this, item));

    if (shoppingCart) {
      shoppingCart.appendChild(newItem);
    }
  });

  //export functions for testing
  module.exports = {
    addToBasket,
    removeFromBasket
  };
};

shoppingFunction();
