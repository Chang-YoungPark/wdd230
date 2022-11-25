
const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();


const currentdate = document.querySelector("#currentdate");
// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

currentdate.innerHTML = getdatetime;

// get the last modified date and time
const dateTime = document.lastModified;
// create a template literal to combine the text and date and time
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;


//function to create a hamburger menu
function toggleMenu(){
    document.getElementById('menuNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// get json data
const requestURL = './js/data.json';

// fetch json data
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

const cards = document.querySelector('#grid');
const list = document.querySelector('#list');
const show = document.querySelector('article');

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1   = document.createElement('p');
    let anchor = document.createElement('a');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

          
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = ` ${company.name }`;
    p1.textContent = `${company.address} `;
    p2.textContent = `${company.phonenumber}`;


    let textNode = document.createTextNode(company.name);
    anchor.appendChild(textNode);
    anchor.href = company.website;
    anchor.classList = 'comp_link';

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill ble).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('class', 'comp_img');
    portrait.setAttribute('alt', `Portait of  ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(anchor);
    card.appendChild(p2);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    show.appendChild(card);
    showcards();
  }

  function showcards(){
    show.classList.add("grid");
    show.classList.remove("list");
  };
  
  cards.addEventListener("click", showcards);
  
  function showList() {
    show.classList.add("grid");
    show.classList.remove("cards");
  }
  
  list.addEventListener("click", showList); 
  //add an event listener with a button for list 

// Original Directory Start   
// Directory 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
// Original Directory End  