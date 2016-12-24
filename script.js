var numOfPiles = 7;
var maxCardsInPile = 7;
var ranNum = '';

var cardPiles = [];
var cardsInPileArr = [];
var adjustedPosition = 0;

//resources
var attackPool = 2;
var defensePool = 8;
var agilityPool = 5;
var willpowerPool = 6;

var cardArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '{', '}'];
var energyArr = ['attack', 'defense', 'agility', 'willpower'];

var cardArrLength = cardArr.length;


$(document).ready(function(){
    createPiles();
    updateResourceDisplay();
})


function createPiles(){
    var $pileDiv;

    //create all piles
    for(var i = 1; i <= numOfPiles; i++){
        $pileDiv = $('<div>', {id: 'pile0' + i, class: 'pile'});
        $('#piles').append($pileDiv);
        adjustedPosition = 0;

        //create cards in each pile
        for(var j = 0; j < maxCardsInPile; j++){
            ranNum = Math.floor((Math.random() * cardArrLength));
            cardsInPileArr.push(cardArr[ranNum]);
            //assign energy to card
            var energyAssigned = energyArr[Math.floor(Math.random() * energyArr.length)];


            var $cardDiv = $('<div>', {id: 'pile0' + i, class: 'card cards ' + energyAssigned, style: 'top: ' + adjustedPosition + 'px;'}).text(cardArr[ranNum]);
            adjustedPosition += 20;
            $('#pile0'+i).append($cardDiv);
        }

        //push cardsInPileArr into cardPiles
        cardPiles.push(cardsInPileArr);
        console.log('cardPiles is : ', cardPiles);
        //Clear cardsInPileArr
        cardsInPileArr = [];

    }
}

function updateResourceDisplay(){


    for(var i = 0; i < energyArr.length; i++){

        var energyDiv = $('<div>', {class: 'resourceMeters ' + energyArr[i], id: energyArr[i] + 'Meter'}).text(energyArr[i] + 'pool')
        //create div
        $('resourceMeterContainer').append();

    }
}

