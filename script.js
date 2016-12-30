var numOfPiles = 7;
var maxCardsInPile = 7;
var ranNum = '';

var cardPiles = [];
var cardsInPileArr = [];
var adjustedPosition = 0;

// var cardArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '{', '}'];
var cardArr = ['1', '2', '3', '4'];
var energyArr = ['attack', 'defense', 'agility', 'willpower'];

var randomCard;
var theCardVal = '';

$(document).ready(function(){
    console.log("doc is ready");
    createPiles();
    makeRandomCard();
    $('#theDeck').click(makeRandomCard);

});

function makeRandomNum (maxNum) {
    return Math.floor((Math.random() * maxNum));
}


function createPiles(){
    var $pileDiv;

    //create all piles
    for(var i = 1; i <= numOfPiles; i++){
        $pileDiv = $('<div>', {id: 'pile0' + i, class: 'pile'});
        $('#piles').append($pileDiv);
        adjustedPosition = 0;

        //create cards in each pile
        for(var j = 0; j < maxCardsInPile; j++){
            ranNum = makeRandomNum(cardArr.length);
            cardsInPileArr.push(cardArr[ranNum]);
            //assign energy to card
            var energyAssigned = energyArr[Math.floor(Math.random() * energyArr.length)];


            var $cardDiv = $('<div>', {id: 'pile0' + i, class: 'card cards ' + energyAssigned, style: 'top: ' + adjustedPosition + 'px;'}).text(cardArr[ranNum]);
            $($cardDiv).click(compareCards);
            adjustedPosition += 20;
            $('#pile0'+i).append($cardDiv);
        }

        //push cardsInPileArr into cardPiles
        cardPiles.push(cardsInPileArr);
        // console.log('cardPiles is : ', cardPiles);
        //Clear cardsInPileArr
        cardsInPileArr = [];

    }
}
function makeRandomCard() {
    var theNum = makeRandomNum(cardArr.length);
    $("#theCard").text(cardArr[theNum]);
    theCardVal = cardArr[theNum];
}


// when card is clicked, compare clicked card to theCard
function compareCards() {
var self = this;
    console.log('this is : ', this);
    console.log('self is : ', self);


    // get text of clicked card
    var clickedCardText = $(this).text();
    var clickedCardIndex = cardArr.indexOf(clickedCardText);
    var theCardValIndex = cardArr.indexOf(theCardVal);
    console.log('clickedCardText is : ', clickedCardText);
    // console.log('theCardVal is : ', theCardVal);
    // console.log('clickedCardIndex is : ', clickedCardIndex);
    // console.log('cardValIndex is : ', theCardValIndex);

// check if theCard is at 0 index pos
if (theCardValIndex == 0){
    console.log('the card is in the 0th position');
    if(clickedCardIndex == (cardArr.length -1) ||  clickedCardIndex == (theCardValIndex + 1) ){

        itsAMatch(clickedCardText, self)
    }
    else {
        notAMatch();

    }
}

// check if theCard is at the end of the array
else if (theCardValIndex == (cardArr.length - 1)){
    console.log('the card is in the last index position');
    if(clickedCardIndex == (theCardValIndex - 1) ||  clickedCardIndex == 0){
        itsAMatch(clickedCardText, self);
    }
    else {
        notAMatch();

    }
}

    //get index position of theCard
    //compare to see if clicked card is 1 higher or lower index position than theCard
    else if (clickedCardIndex == (theCardValIndex - 1) ||  clickedCardIndex == (theCardValIndex + 1) )
    //if it is, then delete clicked card and show the card behind it then make theCard the clicked card's value
    {
        itsAMatch(clickedCardText, self);
    }
    //if not, then do nothing and play sound
    else{
        notAMatch();
    }
}


function itsAMatch (clickedCardText, self){
    console.log('its a match');
    //delete clicked card
    $(self).remove();
    console.log('this is : ', this);

    //replace the card with clicked card
    $('#theCard').text(clickedCardText);
    theCardVal = clickedCardText;
    //play audio sound
    var audio = new Audio('tada.wav');
    audio.play();
}
function notAMatch (){
    console.log('It did not match');
        var audio = new Audio('no.mp3');
        audio.play();
}