// Write your code below:

const ul=document.querySelector("ul");



function handleFormSubmit(event){
event.preventDefault();
const name=event.target.username.value;
const email=event.target.email.value;
const phone=event.target.phone.value;
  const userDetails={
    name:name,
    email:email,
    phone:phone
  }
  const userDetail=JSON.stringify(userDetails);
  localStorage.setItem("User Details",userDetail)
  const li=document.createElement("li");
  const litext=document.createTextNode(name+" "+email+" "+phone);
  const button2=document.createElement("button");
  button2.setAttribute("id", "newId");
  button2.textContent="delete";
  li.appendChild(litext);
  li.appendChild(button2);
  ul.append(li);
  button2.addEventListener("click", function(event){
    this.parentNode.remove(); 
    localStorage.removeItem("User Details");
    
})
}

   

