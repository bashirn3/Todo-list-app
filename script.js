var button = document.querySelector("button");
var list = document.querySelector("ul");
var input = document.querySelector("input");


button.addEventListener("click" , function(){
  
var todo = input.value;

var text = document.createTextNode(todo);
var newItem = document.createElement('li');



newItem.appendChild(text);
list.appendChild(newItem);
   


})