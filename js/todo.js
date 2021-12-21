window.addEventListener('load', () => {


/** add a task to the todo list */
const addTodo = () => {
    const todoInp = document.querySelector('.todo-inp');
    const todoList = document.querySelector('.todo-list');    
    
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




/** add eventlisteners for all buttons/ function  */
const addEventListeners =() => {
    // display add to todo input
    const addTodoBox = document.querySelector(".addTodo-container")
    document.querySelector('.fa-calendar-plus').addEventListener('click', () =>{
        addTodoBox.classList.add('show');           
    })

 // Hide add to todo input    
        document.querySelector('.cancel-add-todo').addEventListener('click', () =>{
        addTodoBox.classList.remove('show');
   })

    //add to todo list
    document.querySelector('.addTodo-btn').addEventListener('click', () =>{
        const todoInp = document.querySelector('.todo-inp');
        //add to to-do list
        addTodo()
        todoInp.value = '';
   
    })

    
    const x = document.querySelectorAll('.delete-btn');
    console.log(x);
    // x.addEventListener('click', deleteTodo, true);
}
addEventListeners()

});