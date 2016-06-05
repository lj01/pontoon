
function myFunction() {
    var x = document.getElementById("pic1");
    pic1.innerHTML = "<img src = 'hearts_small.jpg'>";
}


//card 1
function card_one() {

x = (Math.ceil(Math.random()*(52 - 1) + 1));

if (x<=13) {
c = cards[0].indexOf(x);

var placeonpage = document.getElementById ("placeonpage");
//placeonpage.style.backgroundColor = "#DDDDDD";
//placeonpage.images.src = "hearts_small.jpg";

//var place1 = document.getElementById ("pic1");

placeonpage.innerHTML="<br />Card one is " + x + " in the hearts suit at position " + c + "<img src='hearts_small.jpg'>";


match_card();
} 
else if (x>13 && x<=26) { 
c = cards[1].indexOf(x);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + x + " in the clubs suit at position " + c + "<img src='clubs_small.jpg'>";
//match_card();
} 
else if (x>26 && x<=39) { 
c = cards[2].indexOf(x);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + x + " in the spades suit at position " + c + "<img src='spades_small.jpg'>";
//match_card();
} 
else if (x>39 && x<=52) { 
c = cards[3].indexOf(x);
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is " + x + " in the diamonds suit at position " + c + "<img src='diamonds_small.jpg'>";
//match_card();
} 
else {
var placeonpage = document.getElementById ("placeonpage");
placeonpage.innerHTML="<br />Card one is NO IMAGE";
}

check_ace();
}

function check_ace()
{
if (c == 0) {
c = 1;
}
else {
c == c;
}
}

function check_new_ace()
{
if (newcard == 0) {
newcard = 1;
}
else {
newcard == newcard;
}
add_new_cards();
}


//second card
function another_card() {
y = (Math.ceil(Math.random()*(52 - 1) + 1));
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />Card two is " + y;
if (y<=13) {
a = cards[0].indexOf(y);
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />Card two is " + y + " in the heart suit at position " + a;
    pic1.innerHTML = "<img src = 'hearts_small.jpg'>";
//match_card();
} 

else if (y>13 && y<=26) { 
a = cards[1].indexOf(y);
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />Card two is " + y + " in the clubs suit at position " + a;
    pic1.innerHTML = "<img src = 'clubs_small.jpg'>";
//match_card();
} 
else if (y>26 && y<=39) { 
a = cards[2].indexOf(y);
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />Card two is " + y + " in the spades suit at position " + a;
    pic1.innerHTML = "<img src = 'spades_small.jpg'>";
} 
else if (y>39 && y<=52) { 
a = cards[3].indexOf(y);
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />Card two is " + y + " in the diamonds suit at position " + a;
    pic1.innerHTML = "<img src = 'diamonds_small.jpg'>";
//match_card();
} 
else {
var placeonpage1=document.getElementById ("placeonpage1");
placeonpage1.innerHTML="<br />It isn't here";
}
check_ace();
add_cards();

}



function add_cards() {
z = c+a;
var myTotal=document.getElementById ("myTotal");
myTotal.innerHTML="<br />That makes " + z;

check_twenty_one();
}


function add_new_cards() {
extracards = z + newcard;
var myNewTotal=document.getElementById ("myNewTotal");
myNewTotal.innerHTML="<br /><b>Your new total is </b>" + extracards;

current_total();

check_new_twenty_one();
}

var myTotal = 0;
var extracards = 0;

function current_total() {
myTotal = extracards + myTotal;
var mytotaldisplay=document.getElementById ("myTotalDisplay");
myTotalDisplay.innerHTML="<br /><b>Your NEW total is </b>" + myTotal;
return myTotal;
}

//FINE ABOVE THIS LINE

function check_twenty_one() {

if (z > 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you lose";
}

else if (z < 21) {
var anothercard=document.getElementById ("placeonpage3");
anothercard.innerHTML= "<br />another card?";
anothercard.innerHTML = "<input type='button' value='Another card?' onclick='more_cards()'>";

}

else if (z == 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you win";
}


else if (extracards < 21) {
var anothercard=document.getElementById ("placeonpage3");
anothercard.innerHTML= "<br />another card?";
anothercard.innerHTML = "<input type='button' value='Another card?' onclick='more_cards()'>";

}

else if (extracards == 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you win";
}

else if (extracards > 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you win";
}

else {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />something went wrong";
}

}


function check_new_twenty_one() {

if (extracards > 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you lose";
}

else if (extracards < 21) {
var anothercard=document.getElementById ("placeonpage3");
anothercard.innerHTML= "<br />another card?";
anothercard.innerHTML = "<input type='button' value='Another card?' onclick='more_cards()'>";

}

else if (extracards == 21) {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />you win";
}

else {
var placeonpage3=document.getElementById ("placeonpage3");
placeonpage3.innerHTML= "<br />something went wrong";
}
//myTotal();
}




//FINE ABOVE THIS LINE

//check if card is in deal pack
if (x<=13) {
var a = cards[0].indexOf(x);
document.write("It's in the heart suit at position " + a + "<br />");
match_card();
} 
else if (x>13 && x<=26) { 
var b = cards[1].indexOf(x);
document.write("It's in the clubs suit at position " + b + "<br />");
match_card();
} 
else if (x>26 && x<=39) { 
var c = cards[2].indexOf(x);
document.write("It's in the spades suit at position " + c + "<br />");
match_card();
} 
else if (x>39 && x<=52) { 
var d = cards[3].indexOf(x);
document.write("It's in the diamonds suit at position " + d + "<br />");
match_card();
} 
else {
document.write("No, it isn't here");
}


// 3 or more cards
function more_cards() {
y = (Math.ceil(Math.random()*(52 - 1) + 1));
var placeonpage6=document.getElementById ("placeonpage6");
placeonpage6.innerHTML="<br />This card is " + y;
if (y<=13) {
newcard = cards[0].indexOf(y);
var anothercard1=document.getElementById ("anothercard1");
anothercard1.innerHTML="<br />This card is " + y + " in the heart suit at position " + newcard;
//match_card();
} 

else if (y>13 && y<=26) { 
newcard = cards[1].indexOf(y);
var anothercard1=document.getElementById ("anothercard1");
anothercard1.innerHTML="<br />This card is " + y + " in the clubs suit at position " + newcard;
//match_card();
} 
else if (y>26 && y<=39) { 
newcard = cards[2].indexOf(y);
var anothercard1=document.getElementById ("anothercard1");
anothercard1.innerHTML="<br />This card is " + y + " in the spades suit at position " + newcard;
//match_card();
} 
else if (y>39 && y<=52) { 
newcard = cards[3].indexOf(y);
var anothercard1=document.getElementById ("anothercard1");
anothercard1.innerHTML="<br />This card is " + y + " in the diamonds suit at position " + newcard;
//match_card();
} 
else {
var anothercard1=document.getElementById ("anothercard1");
anothercard1.innerHTML="<br />It isn't here";
}

check_new_ace();


}



function remove_card(a) {
cards[0].splice();
document.write("removed");
document.write(cards[0]);
}


//card 2
var y = (Math.ceil(Math.random()*(52 - 1) + 1));
document.write("y =" + y + "<br />");


//var z = x + y;
//document.write(z);

//check if card 1 is in array, remove it from deal pack if so
if (y in hearts) {
document.write("yep");
}
else {
document.write("nope");
}
