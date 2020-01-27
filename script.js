var button = document.querySelector("button");
var list = document.querySelector("ul");
var input = document.querySelector("input");
var clr = document.getElementById("clear")

clear.addEventListener("click" , function() {
   document.querySelector('ul').innerHTML="";
})



button.addEventListener("click" , function(){
  
var todo = input.value;
if (todo === ''){
  alert("Please insert a todo")
}

else {

var newItem = document.createElement('li');
var del = document.createElement("button");
del.innerHTML ="Delete";



newItem.innerHTML= todo + " ";
newItem.appendChild(del);
list.appendChild(newItem);

}


del.addEventListener("click" , function(){
   
   list.removeChild(newItem);

  })   


})