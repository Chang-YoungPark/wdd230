const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();

// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
console.log(getdatetime);

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
  let total_calories = 0; 
  let fruit1 ="";
  let fruit2 ="";
  let fruit3 ="";
  let text = "";
  const nutritions = [];
  
  function mycal(){
    total_carbohydrates = 0;
    total_protein = 0;
    total_fat = 0;
    total_sugar = 0;
    total_calories = 0; 

    let fLen = foods.length;
    for ( let i = 0; i < fLen; i++) {
      fruit1 = document.getElementById("select1").value;   
      fruit2 = document.getElementById("select2").value;
      fruit2 = document.getElementById("select2").value;
     
      foods.forEach (function(value, key) {      
        if ( value.name == fruit1 || value.name == fruit2 || value.name == fruit3 ) {  
          total_carbohydrates += Number(value.nutritions.carbohydrates); 
          total_protein += Number(value.nutritions.protein) ;
          total_fat += Number(value.nutritions.fat) ;
          total_sugar += Number(value.nutritions.sugar) ;
          total_calories = total_carbohydrates + total_protein +  total_fat + total_sugar ;    
        }      
      })           
      
    }  
      
      text = "";
      text += "<br>" 
      text += "<li> Order date : " + getdatetime + '</li>';
      text += "<li> total carbohydrates : " + Math.round(total_carbohydrates) + '</li>';
      text += "<li> total protein : " + Math.round(total_protein) + '</li>';
      text += "<li> total fat : " + Math.round(total_fat) + '</li>' ; 
      text += "<li> total sugar : " + Math.round(total_sugar) + '</li>' ; 
      text += "<li> total calories : " + Math.round(total_calories) + '</li>' ; 
      text += "<br>" 
      document.getElementById("result").innerHTML = text; 
  }
      
 
   
// Original Directory End  