window.addEventListener('load',
 () => {
    const todoList = document.querySelector('.todo-list');
    const monthDays = document.querySelector('.month-days');
    const currMonthElement = document.querySelector('.cur-month h2');
    const yearNum = document.querySelector('.cur-year p')
    
    // lList of the months 
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

    // let todoCount;
    // console.log(todoCount);
    
    const clickHandler = (dateString) => {
        const prevSelectedDate = document.querySelector('#l'+ selectedDate);
        prevSelectedDate.classList.remove('selected');
        selectedDate = dateString;
        const todoListTitle = document.querySelector(".todo-list-title");
        todoList.innerHTML = '';
        const todos = todoStore[dateString]
        if (todos)  {
            Object.keys(todos).sort((a, b) => a - b).forEach( key => addTodo(key, todos[key]));
          
        }  else {
            
            todoListTitle.innerText = "No tasks for today"
        }
        const currSelectedDate = document.querySelector('#l'+ selectedDate);
        currSelectedDate.classList.add('selected');
    }

    let shownDate;
    const  renderCalendar = (date) => {
        shownDate = date;
        const  month = date.getMonth();
        const  year = date.getFullYear();
        // days in curr month
        const numOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        // days index from prev month
        const daysFromPrevMonth = new Date(year, month, 1).getDay();
         //days in prev month
        const numOfDaysInPrevMonth = new Date(year, month, 0).getDate();
        // number of the calendar rows
        const numOfRows = Math.ceil((numOfDaysInMonth + daysFromPrevMonth) / 7); 
        // days index from next month
        const daysFromNextMonth = numOfRows * 7 - numOfDaysInMonth - daysFromPrevMonth;

        // clear the calendar innerHTML
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
                     //declare the prev year 
                    dayYear = year - 1;
                }

                //find the prev month 
                dayDate = numOfDaysInPrevMonth + i;
                currDay.classList.add('prev-month-day');
    
            } else if (i > numOfDaysInMonth) {
                dayMonth = month + 1;
                if (dayMonth === 12 ) {
                    dayMonth = 0;
                    // find next year
                    dayYear = year + 1;
                }

                // find next month
                dayDate = i - numOfDaysInMonth;
                currDay.classList.add('next-month-day');
            }
            else {
                currDay.classList.add('cur-month-day');
            }
            currDay.innerText = dayDate;
            // define the selected day to display the todo
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
              // display number of todos for each day
          
              if (todoStore[dateString]) {
                 const todoCountDisplay = document.createElement('span');
                 todoCountDisplay.className = 'todo-count';
                 todoCountDisplay.innerText =  Object.keys(todoStore[dateString]).length;
                 currDay.appendChild(todoCountDisplay);
              }
            
              
       
        }
    
        // display the current month and current year
        let monthName = months[month] ;
        currMonthElement.innerText = monthName,
        yearNum.innerText = year;
    
    }
    

    /** all EventListeners */
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
});
