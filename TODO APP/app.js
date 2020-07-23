const date = document.getElementById('date');
options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);



var list = document.getElementById('list');

function addTodo(){
     var todo_task = document.getElementById("task");

     var li = document.createElement("li");
     var liText = document.createTextNode(todo_task.value);


     li.appendChild(liText)

     
     var dltBtn = document.createElement("a")
     var dltText = document.createTextNode("DELETE")
     dltBtn.setAttribute("class","dltBton")
     dltBtn.setAttribute("class", "fa fa-ban")
     dltBtn.setAttribute("onclick","deleteItem(this)")

     dltBtn.appendChild(dltText)

     var editBtn = document.createElement("a")
     var editText = document.createTextNode("EDIT")
     editBtn.setAttribute("class","edtBtn")
     editBtn.setAttribute("class","fa fa-pencil-square-o")
     editBtn.setAttribute("onclick","edtItem(this)")
     
     editBtn.appendChild(editText)


     li.appendChild(dltBtn)
     li.appendChild(editBtn)
     
     list.appendChild(li)

     todo_task.value = " "
}
function deleteItem(e){
     e.parentNode.remove()    
}
function edtItem(e){
     var val =prompt("Enter update value", e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue = val;
 
     // var val = (e.parentNode.firstChild.nodeValue)
     // var editValue =prompt("Enter edit value",val)
     
     
     console.log(e.parentNode.firstChild.nodeValue )
}

function dltAll(){
     list.innerHTML = ""
}
