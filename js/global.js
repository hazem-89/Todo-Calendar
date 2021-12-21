const todoStore = {
['2021-11-21']: ['todo1', 'todo2'],
['2021-11-20']: ['todo3', 'todo4']
};
const today = new Date();
        const currYear = today.getFullYear();
        const currMonth = today.getMonth();
        const currDate = today.getDate();

let selectedDate = currYear + '-' + currMonth + '-' + currDate; 
