// ===============================
// PRODUCT DATA
// ===============================

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 89.99,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Blender",
    price: 49.99,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Air Fryer",
    price: 99.99,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/6996329/pexels-photo-6996329.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Office Chair",
    price: 129.99,
    category: "Office",
    image:
      "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Standing Desk",
    price: 299.99,
    category: "Office",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Printer",
    price: 79.99,
    category: "Office",
    image:
      "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Electric Toothbrush",
    price: 39.99,
    category: "Health",
    image:
      "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Massage Gun",
    price: 89.99,
    category: "Health",
    image:
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "Air Purifier",
    price: 149.99,
    category: "Home",
    image:
      "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Robot Vacuum",
    price: 249.99,
    category: "Home",
    image:
      "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    name: "LED Desk Lamp",
    price: 34.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    name: "Bluetooth Speaker",
    price: 69.99,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// ===============================
// DOM ELEMENTS
// ===============================

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const pagination = document.getElementById("pagination");

const productModal = document.getElementById("product-modal");
const productModalContent = document.getElementById(
  "product-modal-content"
);

const toast = document.getElementById("toast");

const PRODUCTS_PER_PAGE = 8;
const USD_TO_INR = 83;

let cart = [];
let currentPage = 1;
let currentSearch = "";
let currentCategory = "";

// ===============================
// TOAST
// ===============================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ===============================
// RENDER PRODUCTS
// ===============================

function renderProducts() {
  productList.innerHTML = "";

  let filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(currentSearch.toLowerCase());

    const matchCategory =
      currentCategory === "" ||
      product.category === currentCategory;

    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(start, end);

  paginatedProducts.forEach((product) => {
    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      
      <div class="product-content">
        <span class="product-category">${product.category}</span>

        <h3>${product.name}</h3>

        <p class="price">
          $${product.price.toFixed(2)}
          <span>₹${(product.price * USD_TO_INR).toFixed(0)}</span>
        </p>

        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      openProductModal(product);
    });

    productList.appendChild(card);
  });

  renderPagination(totalPages);
}

// ===============================
// PAGINATION
// ===============================

function renderPagination(totalPages) {
  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");

    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active-page");
    }

    btn.onclick = () => {
      currentPage = i;
      renderProducts();
    };

    pagination.appendChild(btn);
  }
}

// ===============================
// ADD TO CART
// ===============================

window.addToCart = function (id) {
  const product = products.find((item) => item.id === id);

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1,
    });
  }

  updateCart();

  showToast("Product added to cart");
};

// ===============================
// UPDATE CART
// ===============================

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    totalItems += item.qty;

    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>${item.qty} x $${item.price}</p>
      </div>

      <div class="cart-actions">
        <button onclick="changeQty(${item.id}, -1)">-</button>

        <span>${item.qty}</span>

        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    `;

    cartItems.appendChild(li);
  });

  cartCount.textContent = totalItems;

  cartTotal.textContent = `
    Total: $${total.toFixed(2)} | ₹${(total * USD_TO_INR).toFixed(0)}
  `;
}

// ===============================
// CHANGE QUANTITY
// ===============================

window.changeQty = function (id, change) {
  const item = cart.find((product) => product.id === id);

  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }

  updateCart();
};

// ===============================
// PRODUCT MODAL
// ===============================

function openProductModal(product) {
  productModalContent.innerHTML = `
    <span class="close-modal" id="close-product-modal">&times;</span>

    <img src="${product.image}" alt="${product.name}" class="modal-image">

    <h2>${product.name}</h2>

    <p class="modal-category">${product.category}</p>

    <h3>
      $${product.price.toFixed(2)}
      | ₹${(product.price * USD_TO_INR).toFixed(0)}
    </h3>

    <button onclick="addToCart(${product.id})">
      Add To Cart
    </button>
  `;

  productModal.classList.remove("hidden");

  document.getElementById("close-product-modal").onclick =
    () => {
      productModal.classList.add("hidden");
    };
}

// ===============================
// SEARCH
// ===============================

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;

  currentPage = 1;

  renderProducts();
});

// ===============================
// CATEGORY FILTER
// ===============================

categoryFilter.addEventListener("change", (e) => {
  currentCategory = e.target.value;

  currentPage = 1;

  renderProducts();
});

// ===============================
// MODAL EVENTS
// ===============================

cartBtn.onclick = () => {
  cartModal.classList.remove("hidden");
};

closeCart.onclick = () => {
  cartModal.classList.add("hidden");
};

window.onclick = (e) => {
  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
  }

  if (e.target === productModal) {
    productModal.classList.add("hidden");
  }
};

// ===============================
// INITIAL RENDER
// ===============================

renderProducts();
