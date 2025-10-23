// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask () {
        const taskText = taskInput.value.trim();
        
        // Check for empty input
        if (taskText === '') {
            alert('Please enter a task');
            return;
        };

        // Create task element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'
        removeButton.classList.add('remove-btn');

        // Remove task when button clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Add to DOM
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Click button to add task
    addButton.addEventListener('click', addTask);
    
    // Press Enter to add task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask()
        };
    });
    
})