
const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();


const currentdate = document.querySelector("#currentdate");
// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

currentdate.innerHTML = getdatetime;