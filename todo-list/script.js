// To-Do List Application
class TodoApp {
    constructor() {
        this.todos = [];
        this.filteredTodos = [];
        this.currentFilter = 'all';
        this.sortBy = 'date';
        this.confirmCallback = null;
        this.initializeEventListeners();
        this.loadFromStorage();
        this.render();
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Input and add button
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.closest('.filter-btn').dataset.filter));
        });

        // Sort buttons
        document.getElementById('sortByDate').addEventListener('click', () => this.setSortBy('date'));
        document.getElementById('sortByPriority').addEventListener('click', () => this.setSortBy('priority'));

        // Action buttons
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('deleteAll').addEventListener('click', () => this.deleteAll());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTodos());

        // Modal
        document.getElementById('modalCancel').addEventListener('click', () => this.closeModal());
        document.getElementById('modalConfirm').addEventListener('click', () => this.confirmAction());
    }

    // Add new todo
    addTodo() {
        const input = document.getElementById('todoInput');
        const priority = document.getElementById('prioritySelect').value;
        const text = input.value.trim();

        if (text === '') {
            this.showToast('Please enter a task', 'error');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.todos.unshift(todo);
        input.value = '';
        document.getElementById('prioritySelect').value = 'medium';
        this.saveToStorage();
        this.render();
        this.showToast('Task added successfully!', 'success');
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            todo.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.render();
        }
    }

    // Delete todo
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
        this.showToast('Task deleted!', 'success');
    }

    // Edit todo
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt('Edit task:', todo.text);
        if (newText && newText.trim() !== '') {
            todo.text = newText.trim();
            todo.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.render();
            this.showToast('Task updated!', 'success');
        }
    }

    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    // Set sort by
    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.render();
    }

    // Get filtered and sorted todos
    getFilteredAndSortedTodos() {
        let filtered = this.todos;

        // Apply filter
        if (this.currentFilter === 'active') {
            filtered = filtered.filter(t => !t.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(t => t.completed);
        } else if (this.currentFilter === 'high') {
            filtered = filtered.filter(t => t.priority === 'high' && !t.completed);
        }

        // Apply sort
        if (this.sortBy === 'priority') {
            const priorityOrder = { high: 0, medium: 1, low: 2 };
            filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        } else if (this.sortBy === 'date') {
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return filtered;
    }

    // Clear completed todos
    clearCompleted() {
        const completed = this.todos.filter(t => t.completed).length;
        if (completed === 0) {
            this.showToast('No completed tasks to clear', 'info');
            return;
        }

        this.showConfirmModal(
            'Clear Completed?',
            `This will delete ${completed} completed task(s).`,
            () => {
                this.todos = this.todos.filter(t => !t.completed);
                this.saveToStorage();
                this.render();
                this.showToast('Completed tasks cleared!', 'success');
            }
        );
    }

    // Delete all todos
    deleteAll() {
        if (this.todos.length === 0) {
            this.showToast('No tasks to delete', 'info');
            return;
        }

        this.showConfirmModal(
            'Delete All Tasks?',
            'This action cannot be undone. All tasks will be permanently deleted.',
            () => {
                this.todos = [];
                this.saveToStorage();
                this.render();
                this.showToast('All tasks deleted!', 'success');
            }
        );
    }

    // Export todos as JSON
    exportTodos() {
        if (this.todos.length === 0) {
            this.showToast('No tasks to export', 'info');
            return;
        }

        const dataStr = JSON.stringify(this.todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `todos-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        this.showToast('Tasks exported successfully!', 'success');
    }

    // Save to localStorage
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Load from localStorage
    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                this.todos = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading todos:', e);
                this.todos = [];
            }
        }
    }

    // Update statistics
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;
        const progress = total > 0 ? (completed / total) * 100 : 0;

        document.getElementById('totalCount').textContent = total;
        document.getElementById('completedCount').textContent = completed;
        document.getElementById('activeCount').textContent = active;
        document.getElementById('progressFill').style.width = progress + '%';
    }

    // Render all todos
    render() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredAndSortedTodos();

        // Clear list
        todoList.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            filtered.forEach(todo => {
                todoList.appendChild(this.createTodoElement(todo));
            });
        }

        this.updateStats();
    }

    // Create todo element
    createTodoElement(todo) {
        const div = document.createElement('div');
        div.className = `todo-item ${todo.priority}-priority ${todo.completed ? 'completed' : ''}`;
        div.dataset.id = todo.id;

        const date = new Date(todo.createdAt);
        const dateStr = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
        });

        div.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <div class="todo-content">
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <div class="todo-meta">
                    <span class="priority-badge ${todo.priority}">${todo.priority}</span>
                    <span class="todo-date"><i class="fas fa-calendar"></i> ${dateStr}</span>
                </div>
            </div>
            <div class="todo-actions">
                <button class="todo-btn edit-btn" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="todo-btn delete-btn" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Event listeners
        div.querySelector('.todo-checkbox').addEventListener('change', () => this.toggleTodo(todo.id));
        div.querySelector('.edit-btn').addEventListener('click', () => this.editTodo(todo.id));
        div.querySelector('.delete-btn').addEventListener('click', () => this.deleteTodo(todo.id));

        return div;
    }

    // Escape HTML
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // Show confirmation modal
    showConfirmModal(title, message, callback) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalMessage').textContent = message;
        this.confirmCallback = callback;
        document.getElementById('confirmModal').classList.remove('hidden');
    }

    // Close modal
    closeModal() {
        document.getElementById('confirmModal').classList.add('hidden');
        this.confirmCallback = null;
    }

    // Confirm action
    confirmAction() {
        if (this.confirmCallback) {
            this.confirmCallback();
        }
        this.closeModal();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});