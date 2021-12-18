window.addEventListener('load', maine);

// lList of the months 
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

let shownDate;

function maine() {
    renderCalendar(new Date());
    // displayListOfMonths()
    addEventListeners()
}

const  renderCalendar = (date) => {
    shownDate = date;
    const  month = date.getMonth();
    const  year = date.getFullYear();

    const numOfDaysInMonth = new Date(year, month + 1, 0).getDate();
    const daysFromPrevMonth = new Date(year, month, 1).getDay();
    const numOfDaysInPrevMonth = new Date(year, month, 0).getDate();
    const numOfRows = Math.ceil((numOfDaysInMonth + daysFromPrevMonth) / 7); 
    const daysFromNextMonth = numOfRows * 7 - numOfDaysInMonth - daysFromPrevMonth;
    const today = new Date();
    const currYear = today.getFullYear();
    const currMonth = today.getMonth();
    const currDate = today.getDate();

    //  find weekends days
    const dayOfWeek = new Date().getDay();
    console.log(dayOfWeek);
    isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
    console.log(isWeekend);

    const monthDays = document.querySelector('.month-days');
    monthDays.innerHTML = '';

    for (let i = 1 - daysFromPrevMonth; i <= numOfDaysInMonth + daysFromNextMonth; i++) {
        let currDay = document.createElement('div');
        currDay.classList.add('month-day');

        if (i < 1) {
            currDay.innerText = numOfDaysInPrevMonth + i;
            currDay.classList.add('prev-month-day');

        } else if (i > numOfDaysInMonth) {
            currDay.innerText = i - numOfDaysInMonth;
            currDay.classList.add('next-month-day');
        }
        else {
        currDay.innerText = i;
        currDay.classList.add('cur-month-day');
        }
        monthDays.appendChild(currDay)
        if (currYear === year && currMonth === month && currDate === i) {
            currDay.classList.add('today')
        }
       if (isWeekend) {
        console.log(isWeekend);
    }
    }

    // display the current month and current year
    let monthName = months[month] ;
    const currMonthElement = document.querySelector('.cur-month h2');
    const yearNum = document.querySelector('.cur-year p')
    currMonthElement.innerText = monthName,
    yearNum.innerText = year;

}

function addEventListeners() { 
    // Display all months 
    // let monthList = document.querySelector('.list-of-months');
    // document.querySelector('.month-changer').addEventListener('click', () => {
    //     monthList.classList.add("show")
    // })

    let monthSelectors = document.querySelectorAll('.month');
    for (const monthSelector of monthSelectors ) {
        monthSelector.addEventListener('click', () => {
            const newMonth = shownDate;
            newMonth.setMonth(shownDate.getMonth()); 
            renderCalendar(newMonth)
        });
        
    }
    

        // Change between Months
    document.querySelector('.fa-angle-down').addEventListener('click', () => {
        const newMonth = shownDate;
        newMonth.setMonth(shownDate.getMonth() - 1); 
        renderCalendar(newMonth)
    })

    document.querySelector('.fa-angle-up').addEventListener('click', () => {
        const newMonth = shownDate;
        newMonth.setMonth(shownDate.getMonth() + 1); 
        renderCalendar(newMonth)
    })



    // Change between year
    document.querySelector('.fa-angle-right').addEventListener('click', () => {
        const newYear = shownDate
        newYear.setFullYear(shownDate.getFullYear() + 1);

        renderCalendar(newYear)
    });


    document.querySelector('.fa-angle-left').addEventListener('click', () => {
        const newYear = shownDate
        newYear.setFullYear(shownDate.getFullYear() - 1);

        renderCalendar(newYear)
    });

    const todoList = document.querySelector('.todo-list-container');
    console.log(todoList);
    const days = document.querySelectorAll('.month-day');
    console.log(days);
    for (const day of days) {
         day.addEventListener('click', () =>{

        todoList.classList.add('show');
        console.log('.month-day');         
    })
    }
    
   
}

