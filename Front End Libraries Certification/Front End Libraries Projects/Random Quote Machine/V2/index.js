import {quotes, colors} from './quotes.js'

let chosenQuote;
let chosenColor;

function randomizer(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function getQuote(){
    chosenQuote = quotes[randomizer(0, quotes.length -1)];
}

function getColor(){
    chosenColor = colors[randomizer(0,colors.length -1)]
    console.log(chosenColor)
}

function changue(){
    getQuote();
    getColor();
$("#quote").text(" " + chosenQuote.quote);
$('#author').text('- ' + chosenQuote.author);
$('#vertical-center').css('background-color', chosenColor);
$('#quote').css('color', chosenColor);
$('#author').css('color', chosenColor);
$('.btn-ligth').css('background-color', chosenColor);
$('.btn-ligth').css('color', "#fff");
$('#tweet-quote').attr('href', chosenQuote.href)

}

$('button').click(function(){
    changue();
})

// esto se ejecuta despues de cargar html
$(document).ready(function () {
changue();
});


