const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },

  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },

  {
    id: 3,
    name: "Laptop",
    price: 899.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },

  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },

  {
    id: 5,
    name: "Air Fryer",
    price: 120.99,
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
  },

  {
    id: 6,
    name: "Office Chair",
    price: 140.00,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    id: 7,
    name: "Smart TV",
    price: 699.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  },

  {
    id: 8,
    name: "Robot Vacuum",
    price: 250.00,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  }
];

const productList = document.getElementById("product-list");

const cartBtn = document.getElementById("cart-btn");

const cartModal = document.getElementById("cart-modal");

const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");

const productModal = document.getElementById("product-modal");

const productModalContent = document.getElementById(
  "product-modal-content"
);

const searchInput = document.getElementById("search-input");

const categoryFilter = document.getElementById(
  "category-filter"
);

const minPriceInput = document.getElementById("min-price");

const maxPriceInput = document.getElementById("max-price");

const pagination = document.getElementById("pagination");

const PRODUCTS_PER_PAGE = 6;

let cart = [];

let currentPage = 1;

let currentSearch = "";

let currentCategory = "";

let currentMinPrice = "";

let currentMaxPrice = "";

const USD_TO_INR = 83;

/* TOAST */

function showToast(message) {

  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

/* IMAGE */

function getImageWithFallback(src, alt) {

  return `
    <img
      src="${src}?auto=format&fit=crop&w=800&q=80"
      alt="${alt}"
      onerror="this.src='https://placehold.co/400x300?text=No+Image'"
    >
  `;
}

/* RENDER PRODUCTS */

function renderProducts() {

  productList.innerHTML = "";

  let filtered = products.filter(product => {

    const matchesSearch =
      product.name.toLowerCase().includes(
        currentSearch.toLowerCase()
      );

    const matchesCategory =
      !currentCategory ||
      product.category === currentCategory;

    const matchesMin =
      !currentMinPrice ||
      product.price >= Number(currentMinPrice);

    const matchesMax =
      !currentMaxPrice ||
      product.price <= Number(currentMaxPrice);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMin &&
      matchesMax
    );
  });

  const totalPages = Math.ceil(
    filtered.length / PRODUCTS_PER_PAGE
  );

  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const end = start + PRODUCTS_PER_PAGE;

  const currentProducts = filtered.slice(start, end);

  currentProducts.forEach(product => {

    const div = document.createElement("div");

    div.className = "product";

    div.innerHTML = `
      ${getImageWithFallback(product.image, product.name)}

      <div class="product-content">

        <h3>${product.name}</h3>

        <p>
          $${product.price.toFixed(2)}
          |
          ₹${(product.price * USD_TO_INR).toFixed(0)}
        </p>

        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>

      </div>
    `;

    div.addEventListener("click", (e) => {

      if (e.target.tagName === "BUTTON") return;

      showProductModal(product);
    });

    productList.appendChild(div);
  });

  renderPagination(totalPages);
}

/* PAGINATION */

function renderPagination(totalPages) {

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {

    const btn = document.createElement("button");

    btn.textContent = i;

    if (i === currentPage) {
      btn.disabled = true;
    }

    btn.onclick = () => {

      currentPage = i;

      renderProducts();
    };

    pagination.appendChild(btn);
  }
}

/* PRODUCT MODAL */

function showProductModal(product) {

  productModalContent.innerHTML = `

    <span class="close" id="close-product">&times;</span>

    ${getImageWithFallback(product.image, product.name)}

    <h2>${product.name}</h2>

    <p>Category: ${product.category}</p>

    <p>
      Price:
      $${product.price.toFixed(2)}
      |
      ₹${(product.price * USD_TO_INR).toFixed(0)}
    </p>

    <button onclick="addToCart(${product.id})">
      Add To Cart
    </button>
  `;

  productModal.classList.remove("hidden");

  document.getElementById("close-product").onclick = () => {

    productModal.classList.add("hidden");
  };
}

/* CART */

window.addToCart = function(id) {

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      ...product,
      qty: 1
    });
  }

  updateCart();

  showToast("Added To Cart");
};

function updateCart() {

  cartItems.innerHTML = "";

  let total = 0;

  let count = 0;

  cart.forEach(item => {

    total += item.price * item.qty;

    count += item.qty;

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.name}</span>

      <div>

        <button class="cart-qty-btn"
        onclick="changeQty(${item.id}, -1)">
        -
        </button>

        ${item.qty}

        <button class="cart-qty-btn"
        onclick="changeQty(${item.id}, 1)">
        +
        </button>

      </div>

      <button class="cart-remove-btn"
      onclick="removeItem(${item.id})">
      Remove
      </button>
    `;

    cartItems.appendChild(li);
  });

  cartCount.textContent = count;

  cartTotal.textContent =
    `Total: $${total.toFixed(2)} | ₹${(total * USD_TO_INR).toFixed(0)}`;
}

window.changeQty = function(id, change) {

  const item = cart.find(i => i.id === id);

  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCart();
};

window.removeItem = function(id) {

  cart = cart.filter(i => i.id !== id);

  updateCart();
};

/* EVENTS */

cartBtn.onclick = () => {
  cartModal.classList.remove("hidden");
};

closeCart.onclick = () => {
  cartModal.classList.add("hidden");
};

cartModal.onclick = (e) => {

  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
  }
};

productModal.onclick = (e) => {

  if (e.target === productModal) {
    productModal.classList.add("hidden");
  }
};

searchInput.addEventListener("input", e => {

  currentSearch = e.target.value;

  currentPage = 1;

  renderProducts();
});

categoryFilter.addEventListener("change", e => {

  currentCategory = e.target.value;

  currentPage = 1;

  renderProducts();
});

minPriceInput.addEventListener("input", e => {

  currentMinPrice = e.target.value;

  renderProducts();
});

maxPriceInput.addEventListener("input", e => {

  currentMaxPrice = e.target.value;

  renderProducts();
});

/* INITIAL */

renderProducts();
