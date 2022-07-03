const requestURL = 'data/data.json';
const cards = document.querySelector('.bcards');
var global_status = 0


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(displayCompany);
  });

function displayCompany(company) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p')
    let phonenumber = document.createElement('p')
    let websiteurl = document.createElement('p')
    let membershiplv = document.createElement('p')



  
    name.textContent = company.name;
    address.textContent = company.addresses;
    phonenumber.textContent = company.phone_num;
    websiteurl.textContent = company.website_URLs;
    membershiplv.textContent = `Membership: ${company.membership_lv}`;
  
    logo.setAttribute('src', company.logo_image);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('width', '250');
    logo.setAttribute('height', '250');
    logo.setAttribute('loading', 'lazy');
  

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(websiteurl);
    card.appendChild(membershiplv);
  
    document.querySelector('div.bcards').appendChild(card);
  }

  function createlist(company){
    let list_item = document.createElement('li');

    let name = document.createElement('h2');
    let address = document.createElement('p')
    let phonenumber = document.createElement('p')
    let websiteurl = document.createElement('p')
    let membershiplv = document.createElement('p')

    name.textContent = company.name;
    address.textContent = company.addresses;
    phonenumber.textContent = company.phone_num;
    websiteurl.textContent = company.website_URLs;
    membershiplv.textContent = `Membership: ${company.membership_lv}`;

    list_item.appendChild(name);
    list_item.appendChild(address);
    list_item.appendChild(phonenumber);
    list_item.appendChild(websiteurl);
    list_item.appendChild(membershiplv);

    document.querySelector('ul#c-list').appendChild(list_item);
  }

function toggle_view(){
  // Toggles between list and card views
  const blist = document.querySelector(".blist")
  const bcards = document.querySelector(".bcards")

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies2 = jsonObject['companies'];;
    if (global_status === 0) {
    bcards.innerHTML = "";
    global_status = 1
    companies2.forEach(createlist);
  } 
  else {
    blist.innerHTML = '<ul id="c-list"></ul>';
    companies2.forEach(displayCompany);
    global_status = 0
  }
  });

  
}
