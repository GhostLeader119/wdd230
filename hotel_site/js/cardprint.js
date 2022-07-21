const requestURL = 'data/temple_dat.json';
const cards = document.querySelector('.temple-cards');
var global_status = 0


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(printcard);
  });


function printcard(temples) {

  
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let picture = document.createElement('img'); // Not done yet
    let address = document.createElement('p')
    let phonenumber = document.createElement('p')
    let email = document.createElement('p')
    let services_title = document.createElement('p')
    let services = document.createElement('ul')
    let history = document.createElement('ul')
    let history_title = document.createElement('p')
    let ordschedule = document.createElement('p')
    let sessSchedule = document.createElement('p')
    let closureSchedule = document.createElement('ul')
    let closureSchedule_title = document.createElement('p')
    let webid = document.createElement('p')


     let service_list_items = temples.temple_services
     let intermediary = ''
     service_list_items.forEach(item => {
      intermediary += `<li>${item}</li>`
   });
   services.innerHTML = intermediary
     let history_list_items = temples.temple_history
     history_list_items.forEach(item => {
      history.innerHTML += `<li>${item}</li>`
   });;
     let closure_list_items = temples.temple_closureSchedule
     closure_list_items.forEach(item => {
      closureSchedule.innerHTML += `<li>${item}</li>`
   });;
  
    name.textContent = temples.name;
    address.textContent = `Address: ${temples.addresses}`;
    phonenumber.textContent = `Phone number: ${temples.phone_num}`;
    email.textContent = `Email: ${temples.temple_email}`;
    ordschedule.textContent = `Ordinance Schedule: ${temples.temple_ordinanceSchedule}`; 
    sessSchedule.textContent = `Session Schedule: ${temples.temple_sessionSchedule}`;
    services_title.textContent = 'Services offered:'
    history_title.textContent = 'History:'
    closureSchedule_title.textContent = 'Closure Schedule:'


    // Set image
    picture.setAttribute('src', temples.temple_image);
    picture.setAttribute('alt', `temples.name`);
    picture.setAttribute('width', '250');
    picture.setAttribute('height', '250');
    picture.setAttribute('loading', 'lazy');
  
    //Add it all together
    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(email);
    card.appendChild(services_title);
    card.appendChild(services);
    card.appendChild(ordschedule);
    card.appendChild(sessSchedule);
    card.appendChild(history_title);
    card.appendChild(history);
    card.appendChild(closureSchedule_title);
    card.appendChild(closureSchedule);
   
  
    document.querySelector('.temple-cards').appendChild(card);
  }

  

