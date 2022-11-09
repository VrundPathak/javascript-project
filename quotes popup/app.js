let quotes = [
    {
        name: 'Stephen king',
        quote: 'Get busy living or get busy dying.'
    },

    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve gratly.'
    },

    {
        name: 'Abraham Lincoln',
        quote: 'I am a success today because I had friend who believed in me and i did not have the heart to let him down.'
    },

    {
        name: 'Naruto Uzumaki',
        quote: 'Never let your gaurds down.'
    }
]

let quoteBtn = document.querySelector("#qouteBtn");
let quote = document.querySelector("#quote");
let quoteAuthor= document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click",getQuote)

function getQuote(){
    let number = Math.floor(Math.random()*quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}