window.addEventListener('load', todoMAin);


function todoMAin() {
    displayDateAndTime()
    startClock()
}

function displayDateAndTime() {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dateElement = document.querySelector('.today-title')
    const timeElement = document.querySelector('.today-date')
    let date = new Date();
    let today = date.getDay();
    let todayDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    curDay = weekDays[today];
    dateElement.innerHTML = curDay;
    timeElement.innerText = todayDate;
}

function displayTodo() {
    

}

function addTodo() {
    
}

function showTodoList() {
    
}
function startClock() {
    date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let clock = hrs + ":" + mins + ":" + secs;
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
   
    
    document.querySelector('.today-time').innerHTML = clock;
    setTimeout(startClock, 1000);


}

function addEventListeners() {
    const addTodoBox = document.querySelector(".addTodo-container")
    document.querySelector('.fa-calendar-plus').addEventListener('click', () =>{
        addTodoBox.classList.toggle('show');           
    })

}