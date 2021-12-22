const todoStore = {
// ['2021-11-21']: ['todo1', 'todo2'],
'2021-11-22': {'12323':'todo1', '2':'todo2', '333':'todo3', '4052':'todo4'}
};
const today = new Date();
        const currYear = today.getFullYear();
        const currMonth = today.getMonth();
        const currDate = today.getDate();

let selectedDate = currYear + '-' + currMonth + '-' + currDate; 


const addTodo = (todoIndex, value) => {
        // event.preventDefault();
        if (value) {
                const todoList = document.querySelector('.todo-list');
                const todoInp = document.querySelector('.todo-inp');
            // Creat todo-list
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.innerText = value;
            todoList.appendChild(todoItem);
            // creat delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn far fa-trash'
            todoItem.appendChild(deleteButton);
    
        if (!todoStore[selectedDate]) {
            todoStore[selectedDate] = {};
        }
            deleteButton.addEventListener('click', (e) =>{
                delete todoStore[selectedDate][todoIndex];
                const todo = e.target.parentNode;
                todo.classList.add('todo-deleted');
                const selectedDayCount = document.querySelector('.selected .todo-count');
                    const count = selectedDayCount.innerText -1;
                    console.log(count, typeof count);
                    if (count === 0) {
                        document.querySelector('.selected').removeChild(selectedDayCount);
                    }  else {
                        selectedDayCount.innerText = count; 
                    } 
                   
                setTimeout(() => {
                    todoList.removeChild(todo)
    
                }, 500)
            });
            // todoItem.addEventListener('transitionend', (e) => {
            //     console.log(e.target, todoList);
            // })   
            todoStore[selectedDate][todoIndex] = value;
            
        }
        
        // saveLocal(todoStore[selectedDate])
    }