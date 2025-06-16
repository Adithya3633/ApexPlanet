// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Todo List Elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

// Form Validation Functions
function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        return false;
    }
    messageError.textContent = '';
    return true;
}

// Add event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// Todo List Functions
function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

// Add todo when clicking the Add button
addTodoBtn.addEventListener('click', addTodo);

// Add todo when pressing Enter
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
}); 