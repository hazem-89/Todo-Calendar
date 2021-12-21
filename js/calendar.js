window.addEventListener('load',
 () => {
    const todoList = document.querySelector('.todo-list');
    const monthDays = document.querySelector('.month-days');
    const currMonthElement = document.querySelector('.cur-month h2');
    const yearNum = document.querySelector('.cur-year p')

    // lList of the months 
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

    const clickHandler = (dateString) => {
        const prevSelectedDate = document.querySelector('#l'+ selectedDate);
        prevSelectedDate.classList.remove('selected');
        todoList.innerHTML = '';
        const todos = todoStore[dateString]
        if (todos) {
            for (let i = 0; i < todos.length; i++) {
                const todoItem = document.createElement('li');
                todoItem.classList.add('todo-item');
                todoItem.innerText = todos[i];
                todoList.appendChild(todoItem);

                //creat delete button
                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = '<i class="far fa-trash"></i>';
                deleteButton.classList.add('delete-btn');
                todoItem.appendChild(deleteButton);
            }
        }
        selectedDate = dateString;
        const currSelectedDate = document.querySelector('#l'+ selectedDate);
        currSelectedDate.classList.add('selected');
    }

    let shownDate;
    const  renderCalendar = (date) => {

        shownDate = date;
        const  month = date.getMonth();
        const  year = date.getFullYear();
    
        const numOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        const daysFromPrevMonth = new Date(year, month, 1).getDay();
        const numOfDaysInPrevMonth = new Date(year, month, 0).getDate();
        const numOfRows = Math.ceil((numOfDaysInMonth + daysFromPrevMonth) / 7); 
        const daysFromNextMonth = numOfRows * 7 - numOfDaysInMonth - daysFromPrevMonth;
        
    
        //  find weekends days
        // const dayOfWeek = new Date().getDay();
        // console.log(dayOfWeek);
        // isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
        // console.log(isWeekend);
    
        
        monthDays.innerHTML = '';
    
        for (let i = 1 - daysFromPrevMonth; i <= numOfDaysInMonth + daysFromNextMonth; i++) {
            const currDay = document.createElement('div');
            currDay.classList.add('month-day');
            let dayDate = i;
            let dayMonth = month;
            let dayYear = year;
            if (i < 1) {
                dayMonth = month - 1;
                if (dayMonth === -1 ) {
                    dayMonth = 11;
                    dayYear = year - 1;
                }
                dayDate = numOfDaysInPrevMonth + i;
                currDay.classList.add('prev-month-day');
    
            } else if (i > numOfDaysInMonth) {
                dayMonth = month + 1;
                if (dayMonth === 12 ) {
                    dayMonth = 0;
                    dayYear = year + 1;
                }
                dayDate = i - numOfDaysInMonth;
                currDay.classList.add('next-month-day');
            }
            else {
                currDay.classList.add('cur-month-day');
            }
            currDay.innerText = dayDate;
            const dateString = dayYear + '-' + dayMonth + '-' + dayDate;
            if (dateString === selectedDate) {
                currDay.classList.add('selected')
            }
            currDay.id = 'l' + dateString;
            currDay.addEventListener('click', () => {
                clickHandler(dateString);
            })
            monthDays.appendChild(currDay)
            if (currYear === year && currMonth === month && currDate === i) {
                currDay.classList.add('today')
            }
        //    if (isWeekend) {
        //     console.log(isWeekend);
        // }
        }
    
        // display the current month and current year
        let monthName = months[month] ;
        currMonthElement.innerText = monthName,
        yearNum.innerText = year;
    
    }
    
    const  addEventListeners = () => { 
       
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
    
    
    
        // Change between years
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
    
        
        
       
    }
    
    
    renderCalendar(new Date());
    addEventListeners()
    clickHandler(selectedDate)
}
);
