let counter = document.querySelector(".counter");
let addCount = document.querySelector("#addCountBtn");
let lowerCount = document.querySelector("#lowerCountBtn");
let clear = document.querySelector("#clearCountBtn");

let count = 0;

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);
clear.addEventListener("click", clearCounter);

function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = "#4caf50";
    }

    else if(counter.innerHTML === '0'){
        counter.style.color = "white";
    }

    counter.animate([{opacity: '0.2'},{opacity: '1.0'}],{duration: 1000, fill: 'forwards'})
}

function decrementCounter(){
    count--
    counter.innerHTML = count;
    if(counter.innerHTML < '0'){
        counter.style.color = "red";
    }

    else if(counter.innerHTML === '0'){
        counter.style.color = "white";
    }
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}],{duration: 1000, fill: 'forwards'})
}

function clearCounter(){
    count = 0;
    counter.innerHTML = count;
    counter.style.color = "white";
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}],{duration: 1000, fill: 'forwards'});
}

