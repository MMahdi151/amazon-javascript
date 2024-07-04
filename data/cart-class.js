class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }
  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    const quantitySelector = Number(
      document.querySelector(`.js-quantity-selector-${productId}`).value
    );

    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += quantitySelector;
    } else {
      this.cartItems.push({
        // productId: productId,
        productId,
        quantity: quantitySelector,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  }
  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
  updateCartQuantity(link) {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    if (cartQuantity === 0) {
      if (link === ".js-cart-quantity") {
        document.querySelector(link).innerHTML = "";
      } else {
        document.querySelector(link).innerHTML = cartQuantity;
      }
    } else {
      document.querySelectorAll(link).forEach((show) => {
        show.innerHTML = cartQuantity;
      });
    }
  }
  loadCart(fun) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      fun();
    });

    xhr.open("GET", "https://supersimplebackend.dev/cart");
    xhr.send();
  }
}

export const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

// console.log(cart);
// console.log(businessCart);
// console.log(businessCart instanceof Cart);
// console.log(businessCart instanceof Cart);
