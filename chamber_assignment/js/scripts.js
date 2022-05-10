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
    const current_month = date_time.getDay()
    const current_day = date_time.getDate()
    const current_year = date_time.getFullYear()
    const current_date = current_month + '/' + current_day + '/' + current_year
    document.querySelector('#time-date').textContent = current_date
    console.log('Ending [get_date()]...');
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