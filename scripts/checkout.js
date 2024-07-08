import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/cart-class.js";
import { cart } from "../data/cart-class.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import "../data/car.js";
// import { cart } from "../data/cart-class.js";
// import "../data/backend-practice.js";
// import { loadCart } from "../data/cart.js";
// import { loadCartFetch } from "../data/cart.js";

async function loadPage() {
  try {
    // throw "error1";
    await Promise.all([loadProductsFetch(), cart.loadCartFetch()]);
  } catch (error) {
    console.log("Unexpected Error!\nplease try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     cart.loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then((names) => {
//   // console.log(names);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("mahdi");
//   });
// })
//   .then((value) => {
//     console.log(value);

//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
