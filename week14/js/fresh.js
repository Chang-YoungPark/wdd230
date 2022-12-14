const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();

// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

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

  var foodhtml = "";
  function output(value){   
    if(value == "undefined" || value == null || value == "" || value == undefined )
      foodhtml += "";
    else
       foodhtml += "<option>"+value.name+"</option>" ;    
       document.getElementById("select1").innerHTML = foodhtml;   
       document.getElementById("select2").innerHTML = foodhtml;  
       document.getElementById("select3").innerHTML = foodhtml;       
      }
  
  // Make a food list
  let foods = []; 
  
  function getFoods(){    
          fetch("js/fruit.json")
              .then((response) => response.json())
              .then((data) =>  {   
              for ( let item of data ){ 
                  foods.push(item);                      
                  output(item);
              } })
              }
  getFoods();

  // Make List
  document.querySelector("#select1").addEventListener("change",function(){mycal();});
  document.querySelector("#select2").addEventListener("change",function(){mycal();});
  document.querySelector("#select3").addEventListener("change",function(){mycal();});
  
  let total_carbohydrates = 0;
  let total_protein = 0;
  let total_fat = 0;
  let total_sugar = 0;
  let total_calories; 
  let fruit ="";
  
  function mycal(){
    let fLen = receipt.length;
    for ( let i = 0; i < fLen; i++) {
      fruit = document.getElementById("select1").value;   
      fruit.forEach (function(value, key) {     
        if ( value.name == fruit ) {
               
          total_carbohydrates += Number(value.carbohydrates); 
          total_protein += Number(value.protein) ;
          total_fat += Number(value.fat) ;
          total_sugar += Number(value.sugar) ;
          total_calories += Number(value.calories) ;    

        }      
      })       
    }
    
    text += "<li> total carbohydrates :" + sum + '</li>';
    text += "<li> total protein:" + tax_rate + '</li>';
    text += "<li> total fat :" + tax + '</li>' ; 
    text += "<li> total sugar :" + tax + '</li>' ; 
    text += "<li> total calories :" + tax + '</li>' ;    
    document.getElementById("result").innerHTML = text; 
  }

// Original Directory End  