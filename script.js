var button = document.getElementById("add");
var list = document.querySelector("ul");
var input = document.querySelector("input");
var clr = document.getElementById("clear");
var doneList = document.getElementById("done");

clear.addEventListener("click" , function() {
   document.getElementById("new").innerHTML="";
   document.getElementById("done").innerHTML="";
})



button.addEventListener("click" , function(){
  
var todo = input.value;
if (todo === ''){
  alert("Please insert a todo")
}

else {

var newItem = document.createElement('li');
var del = document.createElement("button");
var done = document.createElement("button");
done.innerHTML = "Done";
del.innerHTML = "Delete";




newItem.innerHTML = todo + " ";
newItem.appendChild(del);
newItem.appendChild(done);
list.appendChild(newItem);

}


del.addEventListener("click" , function(){
   
   list.removeChild(newItem);

  })   


done.addEventListener("click", function(){
   
    var doneItem = document.createElement("li");
    doneItem.innerHTML = todo + " ";
    doneItem.style.setProperty("text-decoration", "line-through");
    list.removeChild(newItem);
    doneList.appendChild(doneItem);


  })

})