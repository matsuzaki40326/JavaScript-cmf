const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');


function changeColor() {
  btn.style.color = 'red';
  h1.style.color = 'purple';
};

function changeBgColor() {
  h1.style.backgroundColor = 'olive';
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);


// btn.onclick = changeColor;
// btn.onclick = changeBgColor;
