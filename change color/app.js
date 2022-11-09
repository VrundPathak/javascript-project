let btnColor = document.querySelector('.colorBtn');
let bodyBck = document.querySelector('body');

let colors = ['yellow', 'red', 'pink','Lime','Magenta','Purple','Teal','green'];

btnColor.addEventListener("click",changecolor);

function changecolor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBck.style.backgroundColor = colors[random];
}