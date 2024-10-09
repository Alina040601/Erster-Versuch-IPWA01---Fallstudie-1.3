document.querySelector("form").onsubmit = function() {

  let suche = document.querySelector("input").value;
  if (suche.length < 3) {
    alert("zu kurzer Suchbegriff");
  }
}

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (event) => {
  const value = event.target.value
  console.log(value);
});

fetch('./search.json')
      .then(response => response.json())
      .then(data => { 
        data.forEach(section => {
          listEl.insertAdjacentHTML('beforeend', `<li>${section.title}</li>`);
        });
      })
        .catch(error => console.error(error));


// Beispiele Lernen//

let currentTitle = document.title; 

let myClassElements = document.getElementsByClassName("myClass");

let myArray = new Array();

let myOtherArray = [];

var numberOfElements = myArray.length;

let nameArray = [];
nameArray.push("John");
nameArray.push("Paul");

let myArray = ["value", "index", "array"];
myArray.forEach((value,index,array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});

let numberArray = [1,2,3,4,5,6,7,8,9];
let oddNumbers = numberArray.filter((value, index, array) => {
  if(value % 2){
    console.log(value);
    return value;
  }
});

let mappedValue = [1,2,3].map( (value,currentValue, currentIndex, array) => {
  return value * 10;
});
console.log(mappedValue);

let reducedValue = [10,1,2,3,4,5,6,7,8,9].reduce((value, index, array) => {
  return value + currentValue;
});
console.log(reducedValue);

function myFunction(optional, data, here){
  console.log("Hello World");
};

function addNumbers(num1,num2){
  return num1 + num2;
};

let result = addNumbers(1,2);
console.log(result);

const addNumbers = function(num1,num2){
  return num1 + num2}
  addNumbers(2,3);

const arrowFun = (num1,num2) => {num1 + num2};

const arrowFun = num1 => num1 * 2;

const arrowFun = _ => 2;

const arrowFun = () => 2;

const arrowFun = () => ({firstname:Paul});

// control + shift + command + 4 -> screenshot