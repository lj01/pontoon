var newtotal = 0, face_value, first_card, card_value, total, i = 1;


//RESET
function reset ()
{
document.getElementById("take_card").disabled = false; 
history.go(0);
}

// TWENTY DRAWS TO WIN
function player_cards () 
{
if (i <= 20) {
var attempt=document.getElementById ("draw");
draw.innerHTML= i;
i++;
card_draw();
} else {
var attempt=document.getElementById ("attempt");
attempt.innerHTML="Out of cards. Another game?";
document.getElementById("take_card").disabled = disabled; 
}
}

//////////////////////////
//                      //
// PLAYER ONE CARD DRAW //
//                      //
//////////////////////////

// DRAW A CARD AND CHECK ITS PLACE IN THE DECK
function card_draw() {

second_card = (Math.ceil(Math.random()*(52 - 1) + 1));

if (second_card <=13) {
card_value = cards[0].indexOf(second_card);
var placeonpage1 = document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />This card is " + second_card + " in Hearts at position " + card_value + "<img src='hearts_small.jpg'>";
} 
else if (second_card >13 && second_card <=26) { 
card_value = cards[1].indexOf(second_card);
var placeonpage1 = document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />This card is " + second_card + " in Clubs at position " + card_value + "<img src='clubs_small.jpg'>";
} 
else if (second_card>26 && second_card<=39) { 
card_value = cards[2].indexOf(second_card);
var placeonpage1 = document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />This card is " + second_card + " in Spades at position " + card_value + "<img src='spades_small.jpg'>";
} 
else if (second_card>39 && second_card<=52) { 
card_value = cards[3].indexOf(second_card);
var placeonpage1 = document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />This card is " + second_card + " in Diamonds at position " + card_value + "<img src='diamonds_small.jpg'>";
} 
else {
var placeonpage1 = document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />This card is NO IMAGE";
}
check_face_value();
}

// CHECK CARD'S VALUE 0 (ACE) = 1, PICTURE CARDS = 10

function check_face_value() {
{
switch (true) {
case (card_value === 0) : 
card_value = 1;
var CardFaceValue = document.getElementById ("card_face_value");
card_face_value.innerHTML= card_value;

break;
case (card_value >=10) && (card_value <= 13) :
card_value = 10;
var CardFaceValue = document.getElementById ("card_face_value");
card_face_value.innerHTML= card_value;

break;
default : 
card_value == card_value;
var CardFaceValue = document.getElementById ("card_face_value");
card_face_value.innerHTML= card_value;
}
}
player_total();
}

// ADDS CARD VALUE TO TOTAL & DISPLAYS MESSAGE. INITIAL TOTAL IS ZERO
function player_total() {
//alert(card_value);
newtotal += card_value;
//alert(newtotal);
var playerTotal=document.getElementById ("playerTotal");
playerTotal.innerHTML= newtotal;
//return newtotal;
check_twenty_one();
}

// CHECK IF THE PLAYER'S TOTAL IS 21 OR MORE & DISPLAYS MESSAGE.
function check_twenty_one() {
player_total_score = newtotal;

switch (true) {
case (player_total_score == 21) : 
var result=document.getElementById ("result");
result.innerHTML="You win!";
document.getElementById("take_card").disabled = true; 
break;
case (player_total_score >= 21) : 
var result=document.getElementById ("result");
result.innerHTML="You lose. Another game?";
document.getElementById("take_card").disabled = true; 
break;
case (player_total_score <= 21) : 
var result=document.getElementById ("result");
result.innerHTML="Draw another card.";
break;
default : 
var result=document.getElementById ("result");
result.innerHTML="Something went wrong.";
}

}


//Initial card draw
function card_one() {
first_card = (Math.ceil(Math.random()*(52 - 1) + 1));

if (first_card <=13) {
card_value = cards[0].indexOf(first_card);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + first_card + " in Hearts at position " + card_value + "<img src='hearts_small.jpg'>";
} 
else if (first_card >13 && first_card <=26) { 
card_value = cards[1].indexOf(first_card);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + first_card + " in Clubs at position " + card_value + "<img src='clubs_small.jpg'>";
} 
else if (first_card>26 && first_card<=39) { 
card_value = cards[2].indexOf(first_card);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + first_card + " in Spades at position " + card_value + "<img src='spades_small.jpg'>";
} 
else if (first_card>39 && first_card<=52) { 
card_value = cards[3].indexOf(first_card);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + first_card + " in Diamonds at position " + card_value + "<img src='diamonds_small.jpg'>";
} 
else {
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is NO IMAGE";
}
check_face_value();
}

