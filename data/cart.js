export const cart = [];

export function addToCart(productId) {
  const quantitySelector = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantitySelector;
  } else {
    cart.push({
      // productId: productId,
      productId,
      quantity: quantitySelector,
    });
  }
}
