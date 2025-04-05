# Shopping-Cart-App

This is a simple shopping cart web application built using HTML, CSS, and JavaScript. It allows users to:

- Browse a list of products.
- Add or remove products from the cart.
- Adjust product quantities.
- Track progress toward earning a free gift.
- Automatically receive a free Wireless Mouse when the cart subtotal reaches ₹1000.

---

## Features

- **Product Display**: View a list of products with name and price.
- **Cart Functionality**: Add, update, or remove products from the cart.
- **Free Gift Logic**: A free gift is added to the cart when the subtotal reaches ₹1000.
- **Progress Bar**: Visual indicator of how close the user is to earning the free gift.
- **Responsive UI**: Styled with clean layout using vanilla CSS.

---

## Get Started
### Prerequisites

No special setup is required. You just need a modern web browser.

---

### Running the App

1. Clone or download the repository.
2. Open the `index.html` file in any browser (Chrome, Firefox, Edge, etc.).
3. You can now add products to your cart and track your progress toward the free gift.

---

## Product List

```js
const PRODUCTS = [
{ id: 1, name: "Laptop", price: 500 },
{ id: 2, name: "Smartphone", price: 300 },
{ id: 3, name: "Headphones", price: 100 },
{ id: 4, name: "Smartwatch", price: 150 },
];
const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;



License

This project is open source and free to use.

