he Edit Button:
const ul=document.querySelector("ul");
const li=document.querySelectorAll("li");
for(let i=0;i<li.length;i++)
{
const editButton=document.createElement("button");
const editbuttontext=document.createTextNode("Edit");
editButton.className="edit-btn";
li[i].appendChild(editButton);
}
// Implement the code as in video but with one extra 'Edit' button in 'li'
const form =document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();
const fruitToAdd=document.querySelector("#fruit-to-add");
const lis=document.createElement("li");
lis.innerHTML= fruitToAdd.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>'
ul.appendChild(lis)
})
ul.addEventListener("click",function(event){
if(event.target.classList.contains("delete-btn"))
  {
    const deleteFruit=event.target.parentElement;
    ul.removeChild(deleteFruit);