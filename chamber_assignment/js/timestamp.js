console.log('Loaded timestamp.js');
const date_at_load = Date.now()
console.log(`Date now = ${date_at_load}`);
document.querySelector(".timestamp").textContent = date_at_load