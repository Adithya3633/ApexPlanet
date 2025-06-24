// Sample book data
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic',
    price: 12.99,
    priceINR: 12.99 * 83,
    rating: 4.7,
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Classic',
    price: 10.99,
    priceINR: 10.99 * 83,
    rating: 4.8,
    image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    price: 14.5,
    priceINR: 14.5 * 83,
    rating: 4.6,
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    price: 15.99,
    priceINR: 15.99 * 83,
    rating: 4.9,
    image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    category: 'Fantasy',
    price: 13.99,
    priceINR: 13.99 * 83,
    rating: 4.8,
    image: 'https://covers.openlibrary.org/b/id/7884866-L.jpg'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    price: 16.99,
    priceINR: 16.99 * 83,
    rating: 4.7,
    image: 'https://covers.openlibrary.org/b/id/10594765-L.jpg'
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    price: 11.99,
    priceINR: 11.99 * 83,
    rating: 4.5,
    image: 'https://covers.openlibrary.org/b/id/9259256-L.jpg'
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    category: 'Thriller',
    price: 12.5,
    priceINR: 12.5 * 83,
    rating: 4.3,
    image: 'https://covers.openlibrary.org/b/id/10041538-L.jpg'
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    price: 18.99,
    priceINR: 18.99 * 83,
    rating: 4.7,
    image: 'https://covers.openlibrary.org/b/id/8370226-L.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Adventure',
    price: 9.99,
    priceINR: 9.99 * 83,
    rating: 4.4,
    image: 'https://covers.openlibrary.org/b/id/8231856-L.jpg'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    category: 'Memoir',
    price: 17.99,
    priceINR: 17.99 * 83,
    rating: 4.8,
    image: 'https://covers.openlibrary.org/b/id/9259257-L.jpg'
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    category: 'Self-Help',
    price: 15.99,
    priceINR: 15.99 * 83,
    rating: 4.3,
    image: 'https://covers.openlibrary.org/b/id/8370227-L.jpg'
  },
  {
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    category: 'Thriller',
    price: 13.49,
    priceINR: 13.49 * 83,
    rating: 4.1,
    image: 'https://covers.openlibrary.org/b/id/10041539-L.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    category: 'Classic',
    price: 11.99,
    priceINR: 11.99 * 83,
    rating: 4.0,
    image: 'https://covers.openlibrary.org/b/id/8228692-L.jpg'
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    category: 'Self-Help',
    price: 14.99,
    priceINR: 14.99 * 83,
    rating: 4.6,
    image: 'https://covers.openlibrary.org/b/id/10594766-L.jpg'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    category: 'Thriller',
    price: 12.99,
    priceINR: 12.99 * 83,
    rating: 4.2,
    image: 'https://covers.openlibrary.org/b/id/10041540-L.jpg'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    category: 'Fantasy',
    price: 18.99,
    priceINR: 18.99 * 83,
    rating: 4.7,
    image: 'https://covers.openlibrary.org/b/id/6979862-L.jpg'
  },
  {
    title: 'Educated Guess',
    author: 'Tara Westover',
    category: 'Memoir',
    price: 13.99,
    priceINR: 13.99 * 83,
    rating: 4.4,
    image: 'https://covers.openlibrary.org/b/id/9259258-L.jpg'
  },
  {
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    category: 'History',
    price: 19.99,
    priceINR: 19.99 * 83,
    rating: 4.5,
    image: 'https://covers.openlibrary.org/b/id/8370228-L.jpg'
  },
  {
    title: 'Brida',
    author: 'Paulo Coelho',
    category: 'Adventure',
    price: 10.99,
    priceINR: 10.99 * 83,
    rating: 4.1,
    image: 'https://covers.openlibrary.org/b/id/8231857-L.jpg'
  }
];

let filteredBooks = [...books];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const sortBySelect = document.getElementById('sort-by');

// Populate category filter
document.addEventListener('DOMContentLoaded', () => {
  const categories = Array.from(new Set(books.map(b => b.category)));
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });
  renderBooks();
});

function renderBooks() {
  productList.innerHTML = '';
  if (filteredBooks.length === 0) {
    productList.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#f472b6;">No books found.</p>';
    return;
  }
  filteredBooks.forEach(book => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img class="product-image" src="${book.image}" alt="${book.title}">
      <div class="product-title">${book.title}</div>
      <div class="product-author">by ${book.author}</div>
      <div class="product-category">${book.category}</div>
      <div class="product-price">$${book.price.toFixed(2)} | ₹${book.priceINR.toFixed(0)}</div>
      <div class="product-rating">&#11088; ${book.rating}</div>
    `;
    productList.appendChild(card);
  });
}

function applyFiltersAndSort() {
  let result = [...books];
  // Category
  const cat = categoryFilter.value;
  if (cat !== 'all') {
    result = result.filter(b => b.category === cat);
  }
  // Price
  const min = parseFloat(minPriceInput.value);
  const max = parseFloat(maxPriceInput.value);
  if (!isNaN(min)) {
    result = result.filter(b => b.price >= min);
  }
  if (!isNaN(max)) {
    result = result.filter(b => b.price <= max);
  }
  // Sort
  switch (sortBySelect.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price); break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price); break;
    case 'rating-asc':
      result.sort((a, b) => a.rating - b.rating); break;
    case 'rating-desc':
      result.sort((a, b) => b.rating - a.rating); break;
    case 'name-asc':
      result.sort((a, b) => a.title.localeCompare(b.title)); break;
    case 'name-desc':
      result.sort((a, b) => b.title.localeCompare(a.title)); break;
    default:
      break;
  }
  filteredBooks = result;
  renderBooks();
}

categoryFilter.addEventListener('change', applyFiltersAndSort);
minPriceInput.addEventListener('input', applyFiltersAndSort);
maxPriceInput.addEventListener('input', applyFiltersAndSort);
sortBySelect.addEventListener('change', applyFiltersAndSort); 