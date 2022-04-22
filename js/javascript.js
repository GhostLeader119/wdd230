function set_time() {
    console.log('System Check: set_time called');
    const date_time = new Date();
    const current_month = date_time.getDay()
    const current_day = date_time.getDate()
    const current_year = date_time.getFullYear()
    const current_date = `${current_month}/${current_day}/${current_year}`
    document.querySelector('.year').textContent = current_date
}
function last_modifcation() {
    console.log('System Check: last_modification called');
    const modified_time = new Date(document.lastModified)
    const outbound_message = `Last modifed: ${modified_time}`
    document.querySelector('.last-mod').textContent = outbound_message
}

console.log('System Check: Javascript loaded');
set_time()
last_modifcation()