window.addEventListener('load', maine);

// lList of the months 
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

//list of the week days 
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// code for leap year

function maine() {
    renderCalendar();
    addEventListeners()
}

const  renderCalendar = () => {

    let date = new Date()
    let  month = date.getMonth();
    let  year = date.getFullYear();
    let dayInMonth = new Date(year, month, 0).getDate();

    let firstDay = new Date(year, month, 1);
    console.log(firstDay);

    let lastDay = new Date(year, month, 0);
    console.log(lastDay);


    let calendar = document.querySelector('.calendar');
    console.log(calendar);
    let weekDays = document.querySelector('.week-days');
    let monthDays = document.querySelector('.month-days');
    console.log(monthDays);

    

   
     monthDays.innerHTML = '';
    for (let i = 0; i <= dayInMonth ; i++) {
        console.log(dayInMonth);
        let currDay = document.createElement('div');
        if (i <= dayInMonth) {
            currDay.classList.add('cur-day');
            currDay.innerHTML = i ;
        }
        monthDays.appendChild(currDay)
        if (i === date.getDate()) {
            currDay.classList.add('today')
        }
    }


    // display the current month and current year
    let currMonth = months[month] ;
    console.log(currMonth);
    const currMonthElement = document.querySelector('.cur-month h2');
    const currYear = document.querySelector('.cur-year p')
    currMonthElement.innerHTML = currMonth,
    currYear.innerHTML = year;

}


function addEventListeners() {
   
    // change between months
    // const nextMonth = document.querySelector('.fa-angle-up')
    // const currMonthElement = document.querySelector('.cur-month h2');
    // document.querySelector('.fa-angle-down').addEventListener('click', () => {
    // })



    // change between years
    let date = new Date();
    let curYear = {value: date.getFullYear()}
    
    const currYear = document.querySelector('.cur-year p');
    document.querySelector('.fa-angle-right').addEventListener('click', () => {
        // currYear.innerHTML = ++curYear.value
        console.log('55');
    });
    const prevYear= document.querySelector('.fa-angle-left');
    prevYear.addEventListener('click', () => {
        currYear.innerHTML = --curYear.value
    });
   
}

