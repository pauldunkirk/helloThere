console.log("hello");
var dog = 1;

var yes = function(a){
	a = (a * 2); //a called below by dog(1 above) so a=1 and 1*2=2
	return a; //2
};


var no = function(a, b){//below passes in 4 and 2
	a = b + a; //6
	b = a * b; //6*2=12
	return b; //12

};

var maybe = function(a){ //passed in dog( still 1 at this point)
	var b = a; //b=1
	a *= 4; //a is 1, then 1*4, so a is now 4
	dog = a / 2; //4/2=2 so now   dog is 2
	return (a + b); //4+1=5
};

var probably = function(a, b, c){//3,2,4
	a = a * b + c;//10
	return c; //10
};

console.log(yes(dog)+ maybe(dog));
//2+5=7


console.log(dog = dog * 2);// dog is now 4
console.log(no(dog,2));//12
console.log(probably(3, 2, dog));//3*2+4=10  (console.log says 4)

console.log((no(dog, 2)) - (probably(3, 2, dog)));
//(4, 2)  - (3,2,4)
//12 - 10 = 2

console.log("hello again________________________________________");
var theNumber = 1;

var michelangelo = function(value){
	value = (value * 2); //called below by theNumber(1 above) so 1*2=2
	return value;
};

var donatello = function(value, anotherValue){//below passes in 4 and 2
	value = anotherValue + value; //6
	anotherValue = value * anotherValue; //6*2=12
	return anotherValue; //12

};

var leonardo = function(value){ //passed in theNumber(=1 at this point)
	var anotherValue = value; //anotherValue=1
	value *= 4; //value is 1 so 1*4 is 4
	theNumber = value / 2; //4/2=2 so now   theNumber is 2
	return (value + anotherValue); //4+1=5
};

var raphael = function(value, anotherValue, yetAnotherValue){//3,2,4
	value = value * anotherValue + yetAnotherValue;//10
	return yetAnotherValue; //10
};

//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);
//2+5=7
theNumber = theNumber * 2;//4

//In your email, tell me what the answer to this expression would be:
console.log((donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
//4, 2  - 3,2,4
//12 - 10 = 2
