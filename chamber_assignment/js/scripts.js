function toggleMenu(){
    console.log('Running [toggleMenu()]...');
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("navBtn").classList.toggle("open")
    document.getElementById("expiriment-to-reset-nav").classList.toggle("open")
    console.log('Ending [toggleMenu()]...');
}

function get_date(){
    console.log('Running [get_date()]...');
    const date_time = new Date();
    let current_day = date_time.getDay()
    current_day = convert_day(current_day)
    const day_in_month = date_time.getDate()
    let current_month = date_time.getMonth()
    current_month = convert_month(current_month)
    const current_year = date_time.getFullYear()
    const current_date = `${current_day}, ${day_in_month} ${current_month} ${current_year}`
    document.querySelector('#time-date').textContent = current_date
    console.log('Ending [get_date()]...');
}

function convert_day(day){
    console.log('Running [convert_day()]...');
    let weekday = 'None'
    if (day = 0){
        weekday = 'Sunday'
    }
    else if (day = 1){
        weekday = 'Monday'
    }
    else if (day = 2){
        weekday = 'Tuesday'
    }
    else if (day = 3){
        weekday = 'Wednesday'
    }
    else if (day = 4){
        weekday = 'Thursday'
    }
    else if (day = 5){
        weekday = 'Friday'
    }
    else if (day = 6){
        weekday = 'Saturday'
    }
    return weekday
}

function convert_month(month){
    let month_translated
    console.log('Running [convert_month()]...');
    if (month = 0) {month_translated = 'January'}
    else if (month = 1) {month_translated = 'February'}
    else if (month = 2) {month_translated = 'March'}
    else if (month = 3) {month_translated = 'April'}
    else if (month = 4) {month_translated = 'May'}
    else if (month = 5) {month_translated = 'June'}
    else if (month = 6) {month_translated = 'July'}
    else if (month = 7) {month_translated = 'August'}
    else if (month = 8) {month_translated = 'September'}
    else if (month = 9) {month_translated = 'October'}
    else if (month = 10) {month_translated = 'November'}
    else if (month = 11) {month_translated = 'December'}
    return month_translated
}

function set_year() {
    console.log('System Check: set_time called');
    const date_time = new Date();
    const current_year = date_time.getFullYear()
    document.querySelector('.year').textContent = current_year
}
get_date()
set_year()
const x = document.getElementById('navBtn')

x.onclick = toggleMenu;