var button = document.querySelector("button");
var list = document.querySelector("ul");
var input = document.querySelector("input");
var clr = document.getElementById("clear")

clear.addEventListener("click" , function() {
   document.querySelector('ul').innerHTML="";
})

button.addEventListener("click" , function(){
  
var todo = input.value;

var newItem = document.createElement('li');
var del = document.createElement("button");
var space = document.createElement("span");

var text = document.createTextNode(todo);
var btnText = document.createTextNode("Delete");
space.textContent ='  ';

del.appendChild(btnText);

newItem.appendChild(text);
newItem.appendChild(space);
newItem.appendChild(del);


list.appendChild(newItem);

del.addEventListener("click" , function(){
   
   list.removeChild(newItem);

  })   


})