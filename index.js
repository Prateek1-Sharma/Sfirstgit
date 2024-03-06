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
function handleFormSubmit(event)
{
  event.preventDefault();
const name=event.target.username.value;
const email=event.target.email.value;
const phone=event.target.phone.value;
  localStorage.setItem("Username",name);
  localStorage.setItem("Email",email)
  localStorage.setItem("Phone",phone);
}
const form=document.querySelector("form");
form.addEventListener("submit", handleFormSubmit)
module.exports=handleFormSubmit