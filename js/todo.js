window.addEventListener('load', () => {
 const todoInp = document.querySelector('.todo-inp');
 
// function saveLocal(todo) {
	
// 	if (localStorage.getItem('todoStore[selectedDate]') === null) {
// 		todoStore[selectedDate] = [];
// 	}else {
// 		todoStore[selectedDate] = JSON.parse(localStorage.getItem('	todoStore[selectedDate]'));
// 	}
// 	todoStore[selectedDate].push(todo)
// 	localStorage.setItem("todos", JSON.stringify(todoStore[selectedDate]));
// }

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
        if (selectedDayCount) {
            selectedDayCount.innerText ++; 
        } else {
            selectedDayCount = document.createElement('span');
            selectedDayCount.classList.add('todo-count');
            document.querySelector('.selected').appendChild(selectedDayCount);

            selectedDayCount.innerText = 1;
        }
        
    })
   
}
addEventListeners()

});