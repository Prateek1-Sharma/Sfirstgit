// Write the code as shown in the video below:
const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign="center";
// Write answer to the questions asked below:
const fruits=document.querySelector('.fruits');
fruits.style.background='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';
const basket1Heading=document.querySelector('h2');
basket1Heading.style.marginleft='30px';
const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++)
  {
    fruitItems[i].style.background="white";
    fruitItems[i].style.padding='10px';
    fruitItems[i].style.margin='10px';
    fruitItems[i].style.borderRadius="5px";
  }
const oddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddFruitItems.length;i++)
{
  oddFruitItems[i].style.background="lightgray";
}
const evenFruitItems=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenFruitItems.length;i++)
{
  evenFruitItems[i].style.background="red";
   evenFruitItems[i].style.color="white";
}
const basketHeading=document.querySelector('#basket-heading');
basketHeading.style.color="brown"