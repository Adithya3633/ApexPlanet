// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoDate = document.getElementById('todo-date');
const calendarContainer = document.getElementById('calendar');

let todos = [];
let editId = null;

// Load todos from localStorage
function loadTodos() {
    const stored = localStorage.getItem('todos');
    todos = stored ? JSON.parse(stored) : [];
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');
        li.dataset.id = todo.id;

        const span = document.createElement('span');
        span.textContent = todo.text;
        span.style.flex = '1';
        span.style.cursor = 'pointer';
        span.onclick = () => toggleComplete(todo.id);

        // Show due date if present
        if (todo.date) {
            const dateSpan = document.createElement('span');
            dateSpan.textContent = ` (${todo.date})`;
            dateSpan.style.fontSize = '0.9em';
            dateSpan.style.color = '#6366f1';
            dateSpan.style.marginLeft = '0.5em';
            span.appendChild(dateSpan);
        }

        const actions = document.createElement('div');
        actions.className = 'todo-actions';

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '✏️';
        editBtn.title = 'Edit';
        editBtn.onclick = (e) => {
            e.stopPropagation();
            startEdit(todo.id);
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'Delete';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        todoList.appendChild(li);
    });
}

// Add or edit todo
function handleForm(e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    const date = todoDate.value || null;
    if (!text) return;
    if (editId) {
        todos = todos.map(todo => todo.id === editId ? { ...todo, text, date } : todo);
        editId = null;
        todoForm.querySelector('button[type="submit"]').textContent = 'Add';
    } else {
        todos.push({ id: Date.now().toString(), text, completed: false, date });
    }
    todoInput.value = '';
    todoDate.value = '';
    saveTodos();
    renderTodos();
    renderCalendar();
}

todoForm.addEventListener('submit', handleForm);

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editId) {
        editId = null;
        todoInput.value = '';
        todoDate.value = '';
        todoForm.querySelector('button[type="submit"]').textContent = 'Add';
    }
});

function toggleComplete(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    saveTodos();
    renderTodos();
    renderCalendar();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
    renderCalendar();
}

function startEdit(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    editId = id;
    todoInput.value = todo.text;
    todoDate.value = todo.date || '';
    todoInput.focus();
    todoForm.querySelector('button[type="submit"]').textContent = 'Update';
}

// Calendar rendering
function renderCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
    const daysInMonth = lastDay.getDate();

    // Prepare tasks by date
    const tasksByDate = {};
    todos.forEach(todo => {
        if (todo.date) {
            if (!tasksByDate[todo.date]) tasksByDate[todo.date] = [];
            tasksByDate[todo.date].push(todo);
        }
    });

    // Build calendar grid
    let html = '';
    // Weekday headers
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(day => {
        html += `<div class="calendar-day" style="background:none;font-weight:bold;text-align:center;box-shadow:none;">${day}</div>`;
    });
    // Empty days before first
    for (let i = 0; i < startDay; i++) {
        html += '<div class="calendar-day" style="background:none;box-shadow:none;"></div>';
    }
    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = (now.getDate() === day && now.getMonth() === month && now.getFullYear() === year);
        html += `<div class="calendar-day${isToday ? ' today' : ''}">`;
        html += `<div class="day-number">${day}</div>`;
        if (tasksByDate[dateStr]) {
            html += '<ul class="calendar-tasks">';
            tasksByDate[dateStr].forEach(todo => {
                html += `<li${todo.completed ? ' style="text-decoration:line-through;opacity:0.7;"' : ''}>${todo.text}</li>`;
            });
            html += '</ul>';
        }
        html += '</div>';
    }
    calendarContainer.innerHTML = html;
}

// Initial load
loadTodos();
renderTodos();
renderCalendar(); 