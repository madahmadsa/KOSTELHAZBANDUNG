# To-Do List Application

## Overview
A modern, feature-rich to-do list application with local storage functionality. Built with vanilla HTML, CSS, and JavaScript. All data is automatically saved to your browser's local storage.

## Features

### Core Features
- ✅ **Add Tasks** - Add new tasks with priority levels (High, Medium, Low)
- ✅ **Mark Complete** - Check off tasks as you complete them
- ✅ **Edit Tasks** - Edit task text inline
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Priority Levels** - Set priority for each task (High, Medium, Low)
- ✅ **Local Storage** - All data persists across browser sessions

### Filtering & Sorting
- 🔍 **Filter by Status** - View All, Active, Completed, or High Priority tasks
- 📊 **Sort Options** - Sort by date created or priority level
- 📈 **Statistics** - Track total tasks, completed tasks, active tasks, and progress

### Additional Features
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 📤 **Export** - Download your tasks as a JSON file
- 🗑️ **Bulk Actions** - Clear all completed tasks or delete all tasks
- 🔔 **Notifications** - Toast notifications for user actions
- 🎯 **Confirmation Dialogs** - Prevent accidental deletions

## How to Use

### Adding a Task
1. Type your task in the input field
2. Select a priority level from the dropdown (optional, defaults to Medium)
3. Click the "Add" button or press Enter

### Managing Tasks
- **Complete a Task**: Click the checkbox next to the task
- **Edit a Task**: Click the edit button (pencil icon)
- **Delete a Task**: Click the delete button (trash icon)

### Filtering Tasks
- Click the filter buttons to view:
  - **All** - Show all tasks
  - **Active** - Show only incomplete tasks
  - **Completed** - Show only completed tasks
  - **High Priority** - Show high priority incomplete tasks

### Sorting Tasks
- **Sort by Date** - Tasks sorted by creation date (newest first)
- **Sort by Priority** - Tasks sorted by priority (High → Medium → Low)

### Bulk Actions
- **Clear Completed** - Remove all completed tasks
- **Delete All** - Remove all tasks (requires confirmation)
- **Export** - Download all tasks as a JSON file

## Local Storage

All tasks are automatically saved to your browser's local storage. This means:
- Your tasks persist even after closing the browser
- No server or internet connection required
- Data is stored locally on your device
- Storage limit is typically 5-10MB per domain

### Clearing Local Storage
To completely clear your tasks:
1. Open browser Developer Tools (F12)
2. Go to Application → Local Storage
3. Find "https://yoursite.com"
4. Delete the "todos" entry

## File Structure

```
todo-list/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessible form controls
- Font Awesome icons for UI elements

### CSS Features
- CSS Grid and Flexbox for responsive layout
- CSS Variables for theme customization
- Smooth animations and transitions
- Mobile-first responsive design
- Gradient backgrounds

### JavaScript Features
- Object-oriented programming with TodoApp class
- LocalStorage API for data persistence
- Event delegation for efficient event handling
- Array methods (filter, map, sort)
- Date formatting and manipulation

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Not supported (no LocalStorage API)

## Customization

### Change Theme Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #10b981;
    --danger-color: #ef4444;
    /* ... more colors ... */
}
```

### Add More Priority Levels
1. Update the priority select dropdown in `index.html`
2. Add new priority badge styles in `styles.css`
3. Update priority handling in `script.js`

### Change Storage Key
Modify the localStorage key in `script.js`:
```javascript
localStorage.setItem('your-custom-key', JSON.stringify(this.todos));
```

## Performance

- Lightweight (~15KB total)
- No dependencies required
- Fast rendering with vanilla JavaScript
- Optimized animations using CSS transforms

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors
- Focus indicators for keyboard users

## Tips & Tricks

1. **Keyboard Shortcuts**
   - Press Enter to quickly add a task
   - Tab to navigate between elements

2. **Data Backup**
   - Use the Export feature regularly to backup your tasks
   - Import later by manually adding the JSON data

3. **Organization**
   - Use priorities to mark urgent tasks
   - Regularly clear completed tasks to stay focused

4. **Productivity**
   - Review high priority tasks daily
   - Track your progress with the progress bar

## Future Enhancements

- [ ] Due dates for tasks
- [ ] Categories/Tags
- [ ] Recurring tasks
- [ ] Dark mode toggle
- [ ] Task search functionality
- [ ] Undo/Redo functionality
- [ ] Import JSON tasks
- [ ] Share tasks with others
- [ ] Cloud sync

## License

MIT License - Feel free to use and modify for personal or commercial projects.

## Support

If you encounter any issues or have suggestions, please feel free to reach out!

---

**Made with ❤️ for productivity lovers**