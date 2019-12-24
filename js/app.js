// getting Html elements
const morning = document.querySelector('#morning');
const afternoon = document.querySelector('#afternoon');
const night = document.querySelector('#night');
const dDefault = document.querySelector('#dDefault');


// getting elements for styling sake
const canvas = document.querySelector('#myCanvas');
const section = document.querySelector('#section');
const header = document.querySelector('header');

//Adding Elvent listners to change the bgColor of the page.

morning.addEventListener('click', () => {
   canvas.style.backgroundColor = 'rgb(200, 213, 219)';
   header.style.backgroundColor = 'rgb(53, 51, 51)';
})
afternoon.addEventListener('click', () => {
   canvas.style.backgroundColor = 'white';
   header.style.backgroundColor = 'rgb(22, 20, 20)';
})
night.addEventListener('click', () => {
   canvas.style.backgroundColor = 'rgb(29, 29, 29)';
   header.style.backgroundColor = 'black';
})
dDefault.addEventListener('click', () => {
   canvas.style.backgroundColor = 'rgb(126, 126, 126)';
   header.style.backgroundColor = 'rgb(58, 58, 58)';
})