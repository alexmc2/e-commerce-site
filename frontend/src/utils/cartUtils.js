export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate total price of items in the cart
  const rawItemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Calculate shipping price
  state.shippingPrice = addDecimals(rawItemsPrice > 100 ? 0 : 5);

  // Calculate VAT from the items price (excluding shipping)
  const vatRate = 20; // 20% VAT
  state.vatPrice = addDecimals(rawItemsPrice * (vatRate / (100 + vatRate)));

  // Adjust itemsPrice to be the total price minus the VAT
  state.itemsPrice = addDecimals(rawItemsPrice - Number(state.vatPrice));

  // Set the total price (items + VAT + shipping)
  state.totalPrice = addDecimals(Number(state.itemsPrice) + Number(state.vatPrice) + Number(state.shippingPrice));

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};

