window.addEventListener('load', () => {

/** Display date  */
const displayDate = () =>  {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateElement = document.querySelector('.today-title');
    const timeElement = document.querySelector('.today-date');
    const date = new Date();
    const today = date.getDay();
    const todayDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    curDay = weekDays[today];
    dateElement.innerText = curDay;
    timeElement.innerText = todayDate;
}

/** Start the clock  */
const startClock = () =>{
    date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
    let clock = hrs + ":" + mins + ":" + secs;
    document.querySelector('.today-time').innerHTML = clock;
    setTimeout(startClock, 1000);
}
displayDate()
startClock()
});