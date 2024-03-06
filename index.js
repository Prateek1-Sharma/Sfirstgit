function handleFormSubmit(event)
{
event.preventDefault();
const name=event.target.username.value;
const email=event.target.email.value;
const phone=event.target.phone.value;
const userDetails= {
  username:name,
  email:email,
  phone:phone
}
 const userDetail = JSON.stringify(userDetails);
  localStorage.setItem("User Details",userDetail)
}

module.exports=handleFormSubmit;