const subHead=document.createElement("h3");
const subHeadText=document.createTextNode("Buy high quality organic fruits online");
subHead.style.fontStyle ="italic";
subHead.appendChild(subHeadText);

const divs=document.getElementsByTagName("div");
const firstDiv=divs[0];
firstDiv.appendChild(subHead);

const secondDiv=divs[1];
const para=document.createElement("p");
const paraText=document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
secondDiv.appendChild(para);
para.id="fruits-total";