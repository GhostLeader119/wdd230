function compare_dates(new_time,old_time) {
    
    let diffrence = new_time - old_time

    let day_diffrence = diffrence / 86400000

    day_diffrence = Math.round(day_diffrence)
    

    return day_diffrence

}

console.log('Running dayvisit.js');


const visitor_time = document.querySelector("#visit-time")


const last_visited = window.localStorage.getItem("visits-ls")


const current_date = Date.now()

let days = compare_dates(current_date,last_visited);

if (days == 0) {
    visitor_time.textContent = `This is your first visit!`;
    localStorage.setItem("visits-ls", current_date);
} 
else {
    localStorage.setItem("visits-ls", current_date);
    visitor_time.textContent = `It has been ${days} days since you last visit!`;
}
