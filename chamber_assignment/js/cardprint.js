console.log('cardprint.js loaded');
const requestURL = 'data/data.json';
const cards = document.querySelector('.bcards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
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
    logo.setAttribute('loading', 'lazy');
  

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(websiteurl);
    card.appendChild(membershiplv);
  
    document.querySelector('div.bcards').appendChild(card);
  }