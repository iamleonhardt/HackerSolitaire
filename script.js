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

/**
 * On Doc.ready we create piles, add click to deck, and draw a card
 */
$(document).ready(function(){
    createPiles();
    $('#theDeck').click(drawCard);
    drawCard();
});

/**
 * Creates random number up to MaxNum
 * @param maxNum
 * @returns {number}
 */
function makeRandomNum (maxNum) {
    return Math.floor((Math.random() * maxNum));
}

/**
 * Creates piles of cards
 */
//todo Make only the top card click-able
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

        //Clear cardsInPileArr
        cardsInPileArr = [];
    }
}

/**
 * Assign new card to theCard
 */
function drawCard() {
    var theNum = makeRandomNum(cardArr.length);
    theCardVal = cardArr[theNum];
    $("#theCard").text(cardArr[theNum]);

    //todo add sound when player draws a card
}

/**
 * When card is clicked, compare index positions in array to see if clicked card is 1 higher or lower than theCard
 *     if it is, then delete clicked card and show the card behind it then make theCard the clicked card's value
 */
function compareCards() {
var self = this;
// get text of clicked card
var clickedCardText = $(this).text();
var clickedCardIndex = cardArr.indexOf(clickedCardText);
var theCardValIndex = cardArr.indexOf(theCardVal);

// compare cards if theCard is at 0 index pos
if (theCardValIndex == 0){
    if(clickedCardIndex == (cardArr.length -1) ||  clickedCardIndex == (theCardValIndex + 1) ){
        itsAMatch(clickedCardText, self)
    }
    else {
        notAMatch();
    }
}

// compare cards if theCard is at the end of the array
else if (theCardValIndex == (cardArr.length - 1)){
    if(clickedCardIndex == (theCardValIndex - 1) ||  clickedCardIndex == 0){
        itsAMatch(clickedCardText, self);
    }
    else {
        notAMatch();
    }
}

// compare cards in regular positions
    else if (clickedCardIndex == (theCardValIndex - 1) ||  clickedCardIndex == (theCardValIndex + 1) )
    {
        itsAMatch(clickedCardText, self);
    }
    else{
        notAMatch();
    }
}

/**
 * If its a match, remove card, set theCards new value, play audio
 * @param clickedCardText
 * @param self
 */
function itsAMatch (clickedCardText, self){
    //delete clicked card
    $(self).remove();

    //replace the card with clicked card
    $('#theCard').text(clickedCardText);
    theCardVal = clickedCardText;

    //play audio sound
    var audio = new Audio('sounds/tada.wav');
    audio.play();

    //todo Check for win (all cards are gone)
}

/**
 * If its not a match, play audio
 */
function notAMatch (){
    console.log('It did not match');
    var audio = new Audio('sounds/no.mp3');
    audio.play();
}

/**
 * Display info when player wins
 */
function displayWinner (){
    //todo add content when player wins
}


//todo find better sounds for theme
//todo fix theCard dom element
//todo size game for mobile



