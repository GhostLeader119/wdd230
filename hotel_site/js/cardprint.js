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

  console.log(temples);
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
    let webid = temples.webid


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

    //Button creation
    let button_creator = document.createElement('div');
    let pos2 = webid + webid
    button_creator.innerHTML = `<button id="${webid}" onClick="${webid}()">Like <span id="${pos2}"></span></button>`


    // Set image
    console.log('TEST ME!');
    let testmat = temples.temple_image
    console.log(testmat);
    picture.setAttribute('src', testmat);
    picture.setAttribute('alt', temples.name);
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
    card.appendChild(button_creator);
   
  
    document.querySelector('.temple-cards').appendChild(card);
    display_storage(pos2)
  }


  function A3(){
    console.log('FOUIND IT!');
    set_storage('a3a3')
  }
  function A8(){
    console.log('FOUIND IT!');
    set_storage('a8a8')
  }
  function A5(){
    console.log('FOUIND IT!');
    set_storage('a5a5')
  }
  function A9(){
    console.log('FOUIND IT!');
    set_storage('a9a9')
  }

  function set_storage(address){
    console.log('SET STORE ACTIVE!');
    console.log(`Address at ${address}`);
    let input = 1
    let old_data = window.localStorage.getItem(address)
    console.log(`old data ${old_data}`);
    old_data = parseFloat(old_data)
    console.log(`old data ${old_data}`);
    if (old_data != '') {
      old_data += 1
      localStorage.setItem(address, old_data)
    }
    else {
      localStorage.setItem(address, input)
    }
  }
  function display_storage(address) {
    let old_data = window.localStorage.getItem(address)
    let idLoc = '#' + address
    document.querySelector(idLoc).textContent = old_data
  }



  // document.querySelector("#A3").addEventListener("click", clicked_a3);
  // document.querySelector("#A8").addEventListener("click", clicked_a8);
  // document.querySelector("#A5").addEventListener("click", clicked_a5);
  // document.querySelector("#A9").addEventListener("click", clicked_a9);