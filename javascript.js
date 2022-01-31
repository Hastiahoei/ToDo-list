let addToDobutton = document.getElementById('addToDo');
console.log(addToDobutton);
//Koochik bozorg 
let todocontainer = document.getElementById("todocontainer");
debugger
let inputfield = document.getElementById("inputfield");

addToDobutton.addEventListener("click", function(){
let paraghraph = document.createElement("p")
paraghraph.classList.add("paragraph-styling");
paraghraph.innerText = inputfield.value;
todocontainer.appendChild(paraghraph);
inputfield.value ="";
paraghraph.addEventListener("click ", function(){
        paraghraph.style.textDecoration ="line-through";
})

})

