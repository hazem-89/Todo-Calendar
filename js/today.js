window.addEventListener('load', todayMain);


function todayMain() {
    displayDateAndTime()
    startClock()
}
function displayDateAndTime() {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dateElement = document.querySelector('.today-title');
    const timeElement = document.querySelector('.today-date');
    const date = new Date();
    const today = date.getDay();
    const todayDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    curDay = weekDays[today];
    dateElement.innerText = curDay;
    timeElement.innerText = todayDate;
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