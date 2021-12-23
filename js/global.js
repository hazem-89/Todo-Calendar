/** Global object for the todo list */
const todoStore = {
'2021-11-31': {'123':'Party', '1234':'party again', '12345':'Repeat'},
'2021-11-23': {'123':'todo1', '1234':'todo2', '12345':'todo3', '123456':'todo4'}
};

/**Global object retune with the selected Date  */
const today = new Date();
        const currYear = today.getFullYear();
        const currMonth = today.getMonth();
        const currDate = today.getDate();

let selectedDate = currYear + '-' + currMonth + '-' + currDate; 

// add addTodo in global so its accessible in calendar file
/** Add to todo list and delete from todo list */
const addTodo = (todoIndex, value) => {
        if (value) {
                const todoList = document.querySelector('.todo-list');
            // Creat todo-list
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.innerText = value;
            todoList.appendChild(todoItem);
            // creat delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn far fa-trash';
            todoItem.appendChild(deleteButton);
        // check if there is no todos, creat one      
        if (!todoStore[selectedDate]) {
            todoStore[selectedDate] = {};
        }
        // delete a todo 
            deleteButton.addEventListener('click', (e) =>{
                //declare witch todo we want to delete and delete it from the todo object
                delete todoStore[selectedDate][todoIndex];
                const todo = e.target.parentNode;
                todo.classList.add('todo-deleted');
                const selectedDayCount = document.querySelector('.selected .todo-count');
                const todoListTitle = document.querySelector(".todo-list-title");
                // decrees todo counts by one every time we delete
                    const count = selectedDayCount.innerText -1;
                    // check if there no todo delete the count span and changes the todo list title 
                    if (count === 0) {
                        document.querySelector('.selected').removeChild(selectedDayCount);
                        todoListTitle.innerText = "No tasks for today";
                    }  else {
                        selectedDayCount.innerText = count; 
                    } 
                    // waiting for the transition to end 
                        setTimeout(() => {
                        todoList.removeChild(todo);
                        }, 500)
            });
            todoStore[selectedDate][todoIndex] = value;
            
        }
    }