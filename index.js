// Write your code below:

const ul=document.querySelector("ul");
const popname=document.querySelector("#username");
const popemail=document.querySelector("#email");
const popphone=document.querySelector("#phone");


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
  localStorage.setItem(email,userDetail)
  const li=document.createElement("li");
  const litext=document.createTextNode(name+" "+email+" "+phone);
  const button2=document.createElement("button");
  button2.setAttribute("id", "newId");
  button2.textContent="delete";
  const edit=document.createElement("button");
  edit.setAttribute("id", "new");
  edit.textContent="Edit";
  li.appendChild(litext);
  li.appendChild(button2);
  li.appendChild(edit);
  ul.append(li);
  button2.addEventListener("click", function(event){
  this.parentNode.remove(); 
  localStorage.removeItem(email);
    
})
edit.addEventListener("click", function(event){
  localStorage.removeItem(email);
  popname.value=name;
  popemail.value=email;
  popphone.value=phone;



  this.parentNode.remove(); 
    
})
}

   

