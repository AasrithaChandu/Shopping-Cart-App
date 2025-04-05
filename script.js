const PRODUCTS = [{
        id: 1,
        name: "Laptop",
        price: 500
    },
    {
        id: 2,
        name: "Smartphone",
        price: 300
    },
    {
        id: 3,
        name: "Headphones",
        price: 100
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 150
    },
];

const FREE_GIFT = {
    id: 99,
    name: "Wireless Mouse",
    price: 0
};
const THRESHOLD = 1000;

let cart = {};

function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!cart[id]) {
        cart[id] = {
            ...product,
            quantity: 1
        };
    } else {
        cart[id].quantity++;
    }
    updateCartUI();
}

function updateQuantity(id, change) {
    if (cart[id]) {
        cart[id].quantity += change;
        if (cart[id].quantity <= 0) {
            delete cart[id];
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById("cart-items");
    const subtotalDiv = document.getElementById("subtotal");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const emptyCartMessage = document.getElementById("empty-cart-message");

    let subtotal = 0;
    let hasItems = false;
    cartItemsDiv.innerHTML = "";

    Object.values(cart).forEach(item => {
        if (item.quantity > 0) {
            hasItems = true;
            subtotal += item.price * item.quantity;
        }
    });

    if (subtotal >= THRESHOLD) {
        cart[FREE_GIFT.id] = {
            ...FREE_GIFT,
            quantity: 1
        };
    } else {
        delete cart[FREE_GIFT.id];
    }

    Object.values(cart).forEach(item => {
        if (item.quantity > 0) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            itemDiv.innerHTML = `
        <div style="flex-grow:1">
          <strong>${item.name}</strong>
          <p>₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
        </div>
        ${
          item.id === FREE_GIFT.id
            ? `<div class="free-gift">Free Gift</div>`
            : `<div class="quantity-controls">
                <button class="btn-minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="btn-plus" onclick="updateQuantity(${item.id}, 1)">+</button>
              </div>`
        }
      `;
            cartItemsDiv.appendChild(itemDiv);
        }
    });

    subtotalDiv.textContent = subtotal;
    progressBar.style.width = `${Math.min((subtotal / THRESHOLD) * 100, 100)}%`;

    if (subtotal >= THRESHOLD) {
        progressText.textContent = "You got a free Wireless Mouse!";
    } else {
        const diff = THRESHOLD - subtotal;
        progressText.textContent = `Add ₹${diff} more to get a FREE Wireless Mouse!`;
    }

    emptyCartMessage.style.display = hasItems ? "none" : "block";
}

loadProducts();
updateCartUI();
