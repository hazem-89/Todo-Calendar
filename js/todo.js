window.addEventListener('load', () => {


/** add a task to the todo list */
const addTodo = () => {
    const todoInp = document.querySelector('.todo-inp');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo')
    
    
    // Creat todo-list
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = todoInp.value;
    todoList.appendChild(todoItem);
    // creat delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="far fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoItem.appendChild(deleteButton);
    if (!todoStore[selectedDate]) {
        todoStore[selectedDate] = [];
    }
    todoStore[selectedDate].push(todoInp.value);
}

function deleteTodo(e) {
    // event.currentTarget.parentNode.remove(event.currentTarget);
    const item = e.currentTarget;
    console.log(item);

// Delete from list

	const todo = item.parentElement;
    console.log(todo);
    todo.remove();
	// todo.classList.add('')
	// todo.addEventListener('transitionend', function () {
	// 	todo.remove();
	// })
    

}
 


/** add eventlisteners for all buttons/ function  */
const addEventListeners =() => {
    // display add to todo input
    const addTodoBox = document.querySelector(".addTodo-container")
    document.querySelector('.fa-calendar-plus').addEventListener('click', () =>{
        addTodoBox.classList.add('show');           
    })

 // Hide add to todo input    
        document.querySelector('.cancel').addEventListener('click', () =>{
        addTodoBox.classList.remove('show');
   })

    //add to todo list
    document.querySelector('.addTodo-btn').addEventListener('click', () =>{
        const todoInp = document.querySelector('.todo-inp');
        //add to to-do list
        addTodo()
        todoInp.value = '';
   
    })

    
    const delButtons = document.querySelectorAll('.delete-btn');
    for (const delBtn of delButtons ) {
        delBtn.addEventListener('click', deleteTodo)
    }
    
   
}
addEventListeners()

});