function set_time() {
const date_time = new Date();
const current_month = date_time.getDay()
const current_day = date_time.getDate()
const current_year = date_time.getFullYear()
const current_date = `${current_month}/${current_day}/${current_year}`
document.querySelector('#year').textContent = current_date
}

console.log('System Check: Javascript loaded');
set_time()