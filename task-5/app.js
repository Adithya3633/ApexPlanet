// Sample product data
const products = [
  { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 89.99, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 3, name: 'Wireless Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 4, name: 'Smart Watch', price: 99.99, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 5, name: 'Smart Watch', price: 149.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 6, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 7, name: 'Laptop', price: 899.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 8, name: 'Laptop', price: 1199.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 9, name: 'Laptop', price: 1599.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 10, name: 'Smartphone', price: 699.99, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3c1b3edc?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 11, name: 'Portable Charger', price: 19.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 12, name: 'Smart Light Bulb', price: 14.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 13, name: 'Action Camera', price: 249.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 14, name: 'Drone', price: 599.99, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 15, name: 'E-Reader', price: 129.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 16, name: 'Smart Thermostat', price: 149.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 17, name: 'Robot Vacuum', price: 249.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 18, name: 'Bluetooth Earbuds', price: 79.99, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 19, name: 'Smart TV', price: 799.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 20, name: 'Streaming Stick', price: 49.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 21, name: 'Wireless Router', price: 59.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 22, name: 'External Hard Drive', price: 89.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 23, name: 'USB Flash Drive', price: 12.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 24, name: 'Smart Plug', price: 24.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 25, name: 'WiFi Extender', price: 34.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 26, name: 'Smart Door Lock', price: 129.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 27, name: 'Security Camera', price: 99.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 28, name: 'Baby Monitor', price: 79.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 29, name: 'Electric Toothbrush', price: 39.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 30, name: 'Hair Dryer', price: 29.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 31, name: 'Air Purifier', price: 149.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 32, name: 'Coffee Maker', price: 89.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 33, name: 'Blender', price: 49.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 34, name: 'Toaster', price: 24.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 35, name: 'Microwave Oven', price: 119.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 36, name: 'Rice Cooker', price: 39.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 37, name: 'Electric Kettle', price: 29.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 38, name: 'Slow Cooker', price: 59.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 39, name: 'Stand Mixer', price: 199.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 40, name: 'Food Processor', price: 99.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 41, name: 'Juicer', price: 69.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 42, name: 'Espresso Machine', price: 249.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 43, name: 'Waffle Maker', price: 34.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 44, name: 'Ice Cream Maker', price: 59.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 45, name: 'Bread Maker', price: 79.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 46, name: 'Deep Fryer', price: 49.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 47, name: 'Popcorn Maker', price: 29.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 48, name: 'Pressure Cooker', price: 99.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 49, name: 'Electric Grill', price: 69.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 50, name: 'Air Fryer', price: 89.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Kitchen' },
  { id: 51, name: 'Vacuum Sealer', price: 59.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 52, name: 'Water Filter', price: 39.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 53, name: 'Dehumidifier', price: 149.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 54, name: 'Space Heater', price: 49.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 55, name: 'Fan', price: 24.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 56, name: 'Humidifier', price: 34.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 57, name: 'Heated Blanket', price: 59.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 58, name: 'Electric Fireplace', price: 299.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Home' },
  { id: 59, name: 'Smart Scale', price: 49.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 60, name: 'Blood Pressure Monitor', price: 39.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 61, name: 'Pulse Oximeter', price: 19.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 62, name: 'Thermometer', price: 14.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 63, name: 'Glucometer', price: 29.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 64, name: 'Nebulizer', price: 49.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 65, name: 'Massage Gun', price: 99.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 66, name: 'Electric Shaver', price: 39.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 67, name: 'Hair Clipper', price: 29.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 68, name: 'Beard Trimmer', price: 24.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 69, name: 'Electric Toothbrush', price: 39.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 70, name: 'Water Flosser', price: 49.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 71, name: 'Facial Steamer', price: 29.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 72, name: 'Nail Drill', price: 19.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 73, name: 'Makeup Mirror', price: 24.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Health' },
  { id: 74, name: 'LED Desk Lamp', price: 34.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 75, name: 'Desk Organizer', price: 14.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 76, name: 'Office Chair', price: 129.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 77, name: 'Standing Desk', price: 299.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 78, name: 'Bookshelf', price: 89.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 79, name: 'Whiteboard', price: 49.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 80, name: 'Printer', price: 99.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 81, name: 'Scanner', price: 79.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 82, name: 'Paper Shredder', price: 59.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 83, name: 'Label Maker', price: 29.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Office' },
  { id: 84, name: 'Projector', price: 199.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 85, name: 'Webcam', price: 49.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 86, name: 'Microphone', price: 59.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 87, name: 'Ring Light', price: 39.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 88, name: 'Tripod', price: 29.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 89, name: 'Camera Bag', price: 49.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 90, name: 'Memory Card', price: 19.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 91, name: 'Lens Cleaner', price: 9.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 92, name: 'Photo Printer', price: 129.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 93, name: 'Graphics Tablet', price: 79.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 94, name: 'Drawing Stylus', price: 29.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 95, name: 'Monitor Stand', price: 34.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 96, name: 'Cable Organizer', price: 14.99, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 97, name: 'Surge Protector', price: 24.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 98, name: 'Smart Power Strip', price: 34.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 99, name: 'Smart Power Strip', price: 49.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' },
  { id: 100, name: 'Smart Power Strip', price: 69.99, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Electronics' }
];

const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const pagination = document.getElementById('pagination');
const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;

let cart = [];
let currentSearch = '';
let currentCategory = '';

const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
const closeProduct = document.getElementById('close-product');

const USD_TO_INR = 83;

const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
let currentMinPrice = '';
let currentMaxPrice = '';

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function getImageWithFallback(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=No+Image'">`;
}

function showProductModal(product) {
  productModalContent.innerHTML = `
    <span class="close" id="close-product">&times;</span>
    ${getImageWithFallback(product.image, product.name)}
    <h2>${product.name}</h2>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> $${product.price.toFixed(2)} | ₹${(product.price * USD_TO_INR).toFixed(0)}</p>
    <button id="modal-add-to-cart">Add to Cart</button>
  `;
  productModal.classList.remove('hidden');
  document.getElementById('close-product').onclick = () => productModal.classList.add('hidden');
  document.getElementById('modal-add-to-cart').onclick = () => {
    addToCart(product.id);
    productModal.classList.add('hidden');
    showToast('Added to cart successfully!');
  };
}

function renderProducts(filter = '', category = '', page = 1, minPrice = '', maxPrice = '') {
  productList.innerHTML = '';
  let filtered = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = !category || product.category === category;
    let matchesMin = true, matchesMax = true;
    if (minPrice !== '' && !isNaN(minPrice)) matchesMin = product.price >= Number(minPrice);
    if (maxPrice !== '' && !isNaN(maxPrice)) matchesMax = product.price <= Number(maxPrice);
    return matchesName && matchesCategory && matchesMin && matchesMax;
  });
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = filtered.slice(start, end);
  pageProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      ${getImageWithFallback(product.image, product.name)}
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)} | ₹${(product.price * USD_TO_INR).toFixed(0)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    div.onclick = (e) => {
      if (e.target.tagName === 'BUTTON') return;
      showProductModal(product);
    };
    productList.appendChild(div);
  });
  renderPagination(totalPages, page);
}

function renderPagination(totalPages, current) {
  if (!pagination) return;
  pagination.innerHTML = '';
  if (totalPages <= 1) return;
  const prev = document.createElement('button');
  prev.textContent = 'Prev';
  prev.disabled = current === 1;
  prev.onclick = () => {
    if (current > 1) {
      currentPage--;
      renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
    }
  };
  pagination.appendChild(prev);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.disabled = i === current;
    btn.onclick = () => {
      currentPage = i;
      renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
    };
    pagination.appendChild(btn);
  }
  const next = document.createElement('button');
  next.textContent = 'Next';
  next.disabled = current === totalPages;
  next.onclick = () => {
    if (current < totalPages) {
      currentPage++;
      renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
    }
  };
  pagination.appendChild(next);
}

window.addToCart = function(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  showToast('Added to cart successfully!');
};

function updateCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartItems.innerHTML = '';
  let total = 0;
  let totalINR = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    totalINR += item.price * USD_TO_INR * item.qty;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name} - $${(item.price * item.qty).toFixed(2)} | ₹${(item.price * USD_TO_INR * item.qty).toFixed(0)}</span>
      <button class="cart-qty-btn" data-action="decrease" data-id="${item.id}">-</button>
      <span> ${item.qty} </span>
      <button class="cart-qty-btn" data-action="increase" data-id="${item.id}">+</button>
      <button class="cart-remove-btn" data-id="${item.id}">Remove</button>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)} | ₹${totalINR.toFixed(0)}`;

  // Add event listeners for cart actions
  cartItems.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.onclick = (e) => {
      const id = Number(btn.getAttribute('data-id'));
      const action = btn.getAttribute('data-action');
      const item = cart.find(i => i.id === id);
      if (item) {
        if (action === 'increase') item.qty++;
        if (action === 'decrease' && item.qty > 1) item.qty--;
        updateCart();
      }
    };
  });
  cartItems.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.onclick = (e) => {
      const id = Number(btn.getAttribute('data-id'));
      cart = cart.filter(i => i.id !== id);
      updateCart();
    };
  });
}

cartBtn.onclick = () => {
  cartModal.classList.remove('hidden');
};
closeCart.onclick = () => {
  cartModal.classList.add('hidden');
};

// Close modal on outside click
cartModal.onclick = (e) => {
  if (e.target === cartModal) {
    cartModal.classList.add('hidden');
  }
};

// Search functionality
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
  });
}

// Category filter functionality
if (categoryFilter) {
  categoryFilter.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentPage = 1;
    renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
  });
}

// Close modal on outside click
productModal.onclick = (e) => {
  if (e.target === productModal) {
    productModal.classList.add('hidden');
  }
};

// Price range filtering
if (minPriceInput) {
  minPriceInput.addEventListener('input', (e) => {
    currentMinPrice = e.target.value;
    currentPage = 1;
    renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
  });
}
if (maxPriceInput) {
  maxPriceInput.addEventListener('input', (e) => {
    currentMaxPrice = e.target.value;
    currentPage = 1;
    renderProducts(currentSearch, currentCategory, currentPage, currentMinPrice, currentMaxPrice);
  });
}

renderProducts(); 