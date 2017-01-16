console.log("test");
var numOfCustomers = prompt("How many customers are there?");
while (numOfCustomers > 0) {
alert( "How may I help you?" );

// help the customer...

numOfCustomers = numOfCustomers - 1;
}
var name = prompt("Who you?");

var sup = prompt("Hi " + name + "!  Sup?");

next = prompt(sup + "? That's sweet! What else " +name+ "?");

var next = prompt(next + "? That's so goofy!");

alert("Later Guv'na!");

var clicks=0;
var tau = 6.28318;

var addClick = function(){
  //in the HTML file, there is a button set to call this function via onClick=addClick() - notice the parentheses
  clicks++;
  console.log(clicks + " click\(s\). Simply comparing clicks to tau, which is 6.28318 (https://en.wikipedia.org/wiki/Tau) but rounding to 6 when we click of course. When you get to 7, console will log \"true\"");
  console.log(isGreaterThan( clicks, tau) );
} //end addClick

var isGreaterThan = function(number0, number1) {
  if (number0 > number1){
    return true;
  } else {
    return false;
  }
}
