window.addEventListener('load', () => {
 const todoInp = document.querySelector('.todo-inp');
 
/** add eventListeners for all buttons/ function  */
const addEventListeners =() => {
    // display add to todo input
    const addTodoBox = document.querySelector(".addTodo-container");
    document.querySelector('.fa-calendar-plus').addEventListener('click', () =>{
        addTodoBox.classList.add('show');           
    })

    // Hide add to todo input    
        document.querySelector('.cancel').addEventListener('click', () =>{
        addTodoBox.classList.remove('show');
   })

    //add to todo list
    document.querySelector('.addTodo-btn').addEventListener('click', () =>{
        //add to to-do list
        addTodo( new Date().getTime(), todoInp.value)
        todoInp.value = '';
        let selectedDayCount = document.querySelector('.selected .todo-count');
        // increase the todos count when a todo is added 
        if (selectedDayCount) {
            selectedDayCount.innerText ++;
        // creat a todo count span
        } else {
            selectedDayCount = document.createElement('span');
            selectedDayCount.classList.add('todo-count');
            document.querySelector('.selected').appendChild(selectedDayCount);
            const todoListTitle = document.querySelector(".todo-list-title");
            todoListTitle.innerText = "Your tasks for today"
            selectedDayCount.innerText = 1;
        }
    })

    // Display the calender in the mobile view
    document.querySelector('.display-calender').addEventListener('click', () =>{
        document.querySelector('.calendar-container').classList.add('show');
    })
   
}
addEventListeners()

});