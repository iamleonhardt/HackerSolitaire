var numOfPiles = 7;
var maxCardsInPile = 7;
var cardPiles = [];
var ranNum = '';
var cardsInPileArr = [];
var adjustedPosition = 0;

var cardArr = ['2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')', '{', '}'];
var energyArr = ['attack', 'defense', 'agility', 'willpower'];

var cardArrLength = cardArr.length;
console.log('cardArr.length is : ', cardArr.length);

$(document).ready(function(){
    console.log('the document is ready');
    createPiles();
    // $('#createPileBtn').click(function(){
    //     storePreferences();
    //     console.log('the button was clicked');
    // })
})

function storePreferences(){
    numOfPiles = $('#numOfPilesInput').val();
    console.log('numOfPiles : ', numOfPiles);
    maxCardsInPile = $('#maxCardsInput').val();
    console.log('maxCardsInPile is : ', maxCardsInPile);
}

function createPiles(){
    var $pileDiv;
    //create all piles
    for(var i = 1; i <= numOfPiles; i++){
        $pileDiv = $('<div>', {id: 'pile0' + i, class: 'pile'});
        $('#gameArea').append($pileDiv);
        adjustedPosition = 0;

        //create cards in each pile
        for(var j = 0; j < maxCardsInPile; j++){
            ranNum = Math.floor((Math.random() * cardArrLength));
            cardsInPileArr.push(cardArr[ranNum]);
            //assign energy to card
            var energyAssigned = energyArr[Math.floor(Math.random() * energyArr.length)];
            console.log('energyAssigned num is : ', energyAssigned);


            var $cardDiv = $('<div>', {id: 'pile0' + i, class: 'card ' + energyAssigned, style: 'top: ' + adjustedPosition + 'px;'}).text(cardArr[ranNum]);
            adjustedPosition += 20;
            $('#pile0'+i).append($cardDiv);
        }

        cardPiles.push(cardsInPileArr);
        var idName = '#pile0' + i;
        // $(idName).text(cardsInPileArr);

        cardsInPileArr = [];
        console.log('cardPiles = ', cardPiles);


    }
}
