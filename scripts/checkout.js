import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/car.js";
import "../data/cart-class.js";
import { cart } from "../data/cart-class.js";
// import "../data/backend-practice.js";
import { loadProducts } from "../data/products.js";
// import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("mahdi");
    });
  }),
  new Promise((resolve) => {
    cart.loadCart(() => {
      resolve();
    });
  }),
]).then((names) => {
  // console.log(names);
  renderOrderSummary();
  renderPaymentSummary();
});

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
