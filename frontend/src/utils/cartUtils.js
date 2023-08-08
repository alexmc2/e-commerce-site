export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price

  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price

  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 5);

  // Calculate vat price
  state.vatPrice = addDecimals(Number((0.2 * state.itemsPrice).toFixed(2)));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.vatPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
