 function toggleMenu(){
     document.getElementById("primaryNav").classList.toggle("open")
     document.getElementById("navBtn").classList.toggle("open")
     document.getElementById("expiriment-to-reset-nav").classList.toggle("open")
 }

 function set_year() {
    //Runs copyright in footer
     const date_time = new Date();
     const current_year = date_time.getFullYear()
     document.querySelector('.year').textContent = current_year
 }
// get_date()
 set_year()
 const x = document.getElementById('navBtn')

 x.onclick = toggleMenu;

 // last mod

let lastmod = document.lastModified
document.querySelector(".last-mod").textContent = 'Last modified: '+ lastmod