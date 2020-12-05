/* 
Data and Structure types

The latest ECMAScript standard defines nine types:

Six Data Types that are primitives, checked by typeof operator:
undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"

Structural Types:
Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

Structural Root Primitive:
null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown; 
*/

// NUMBERS

const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);

// ----------------------------------------------------------------------------------------------------------------------------------

// STRINGS

const myName = `Brian Holt`;

console.log(myName);

// ----------------------------------------------------------------------------------------------------------------------------------

// STRING CONCATENATION & TEMPLATE STRINGS

const firstName = `Brian`;
const lastName = "Holt";

const sentenceOne = "Hello " + firstName + " " + lastName + "! How are you!?"; // string concatenation
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`; // template strings

console.log(sentenceOne); //string concatenation
console.log(sentenceWithTemplate); //template strings

// ----------------------------------------------------------------------------------------------------------------------------------

// BOOLEANS

const lightIsOn = true;
const lightIsOff = false;

console.log(lightIsOn);
console.log(lightIsOff)

// ----------------------------------------------------------------------------------------------------------------------------------

// CONTROL FLOW, CONDITIONS

const skyIsBlue = true;

if (skyIsBlue) {
    console.log(`The sky is blue!`);
} else {
    console.log(`The sky is … not blue?`);
}

/*  */

if (2 + 2 === 4) { // use triple equal signs
    console.log(
        `Oh thank god, the fundamental principles of mathematics still hold true.`
    );
} else {
    console.log(
        `Uh, panic?`
    );
}

/*  */

const friendsAtYourPartyOne = 10;

if (friendsAtYourPartyOne === 0) {
    console.log(
        `Cool, now I have a lot of nachos to myself.`
    );
} else if (friendsAtYourPartyOne >= 4) {
    console.log(
        `Perfect amount to play some Mario Kart.`
    );
} else {
    console.log(
        'Wooooo turn on the dance music!'
    );
}
/*  There's also !==. This is asking "is this not equal to that". Lastly you can ask with numbers > >= < <= as well to ask if numbers less than or greater than too.  */

// ----------------------------------------------------------------------------------------------------------------------------------

// LOOPS

let friendsAtYourPartyTwo = 0;
while (friendsAtYourPartyTwo < 10) {
    friendsAtYourPartyTwo = friendsAtYourPartyTwo + 1;
}

console.log(friendsAtYourPartyTwo);

/*  */

let friendsAtYourPartyThree = 0;
for (let i = 0; i <= 10; i++) {
    friendsAtYourPartyThree++;
}

console.log(friendsAtYourPartyThree);

/* ways of incrementing
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
It also works with -= (subtraction,) as well as *= (multiplication,) /= (division,) and **= (exponent) */

// ----------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 1

const character = `f`
const timeToRepeat = 5
let counter = 0
let answer = ``

while (counter < timeToRepeat) {
    answer += character;
    counter++;
}

console.log(answer)

/*  */

const characterTwo = `f`
const timeToRepeatTwo = 5
let answerTwo = ``

for (let i = 0; i < timeToRepeat; i++) {
    answerTwo += characterTwo;
}

console.log(answerTwo)

// ----------------------------------------------------------------------------------------------------------------------------------

// FUNCTIONS AND SCOPE

// FUNCTIONS

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(7);
console.log(finalAnswer);

/*  */

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I\'m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet(`Brian`, `Holt`, `Lord`, `Salutations`));
console.log(greet(`Jack`, `Sparrow`, `Captain`, `A-hoy`));

/* */

const myHomeCity = `Salt Lake City`;
const myHomeState = `Utah`;
const myHomeCountry = `USA`;

function logOutYourHome(city, state, country) {
    console.log(
        `You are from ${city}, ${state} ${country}.`
    );
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);

// SCOPE

/* Every time you call a function, it has its own scope. Other things can't peek into it; it just has its own little workspace for it work with. Once its done, any variable that you haven't explicitly held on to or returned at the end is discarded. */

/* function addFive(number) {
    const someVariable = "you can't see me outside this function";
    return number + 5;
}

addFive(10);
console.log(someVariable); */

/*  */

/* let friendsAtYourPartyFour = 0;
for (let i = 0; i <= 10; i++) {
    friendsAtYourPartyFour++;
}
console.log(i); // `i` is not defined */

/*  */

/* const A = "A";
let F;

function doStuff(B) {
    console.log(B); // yes
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
        const D = "D";
        H = "something else";
    }
    console.log(D); // no
    console.log(H); // no -> yes
    F = "F";
}

let E = 0;
while (E < 3) {
    E++;
    console.log(A); // yes
    const G = "G";
}
console.log(E); // yes
console.log(G); // no

doStuff("B");
console.log(B); // no
console.log(C); // no
console.log(F); // no -> yes */

// ----------------------------------------------------------------------------------------------------------------------------------

// BUILTINS

/* Lots of functions already exist for you! Smart people have created this commonly-used functions for things we often need.
 */

const sentenceTwo = `ThIs HaS wEiRd CaSiNg On It`;
console.log(sentenceTwo.toLowerCase());

/*  */

/* Math.round(numberToRound) - it'll return number in parameters rounded
string.substr(indexToStart, howManyCharactersToInclude)  - it'll return indicated part of a string */

console.log(Math.round(5.1));

/*  */

const name = `Brian Holt`;
console.log(name.substr(6, 3));

// ----------------------------------------------------------------------------------------------------------------------------------

// OBJECTS & ARRAYS

/* So far we've talked about having one variable at a time: one first name, one last name, one price, etc. What if we have a collection of data? It'd be nice to group together like data. Good news! You can!
 */

const person = {
    name: `Brian Holt`, // key: `value`, - key should be unique
    city: `Seattle`,
    state: `WA`,
    favoriteFood: `Taco`,
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
    address: {
        street: '1234 Testdrive',
        apt: `123`
    }
};

const propName = 'name'

console.log(person);
console.log(person.name);
console.log(person['name']); // same as the line above; definitely prefer using the other one
console.log(person[propName]);
console.log(person.address.street);

/*  */

const person1 = {
    name: `Brian`,
    ageRange: `25-35`
};
const person2 = {
    name: `Jack`,
    ageRange: `65-75`
};

function suggestMusic(person) {
    if (person.ageRange === `25-35`) {
        console.log(
            `We think you'll like Daft Punk your crazy millenial.`
        );
    } else if (person.ageRange === `65-75`) {
        console.log(
            `You\'re obviously going to like Johnny Cash. He walks the line.`
        );
    } else {
        console.log(
            `Uh, maybe try David Bowie? Everyone likes David Bowie, right?`
        );
    }
}

suggestMusic(person1);
suggestMusic(person2);

/*  */

const dog = {
    name: "dog",
    speak() { // function inside the object, can be also written as 'speak : function()'
        console.log("woof woof");
    }
};

dog.speak();

/*  */

const meOne = {
    name: { // nested object
        first: "Brian",
        last: "Holt"
    },
    location: { //nested object
        city: "Seattle",
        state: "WA",
        country: "USA"
    }
};

console.log(meOne.name.first);

// CONTEXT

const meTwo = {
    name: {
        first: "Brian",
        last: "Holt"
    },
    location: {
        streetNumber: 500,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA"
    },
    getAddress() { // this. -> refers to the object you are in
        return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
    }
};

console.log(meTwo.getAddress());

// ARRAYS

/* Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are ordered collections of data. If you put something in an array, it has an order. For example, you might a list of the days of the week. */

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);

/* Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an arry of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc. */

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];

console.log(primeNumbers.length); // primeNumbers.length gives you back an number that is how long the array is
console.log(primeNumbers.join(" | ")); // primeNumbers.join("parameterForDilimeter")) takes your whole array and makes it into one string

/*  */

const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" }); // .push addes into end of the array 

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" }; // rewrites 3rd element in the array

console.log(courses);

/*  */

// run through array

const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2, functional
cities.forEach(function(index, city, three) {
    console.log(three, city, index);
});

// method - function on an object

/* array.forEach(function(currentValue, index, arr), thisValue)
currentValue - Required. The value of the current element
index - Optional. The array index of the current element
arr - Optional. The array object the current element belongs to*/

// ----------------------------------------------------------------------------------------------------------------------------------

// THE DOM

/* The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the document object model. The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.
 */

/* <style>
    .red - square {
        width: 100 px;
        height: 100 px;
        background - color: crimson;
    } 
</style>

<div class = "red-square" > </div>

<script>
    const redSquare = document.querySelector('.red-square');
    redSquare.style.backgroundColor = 'limegreen'; 
</script> */

/*  */

/* <ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
<script>
  const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
</script> */

// ----------------------------------------------------------------------------------------------------------------------------------

// EVENTS & LISTENERS

/* An event is created every time certain events happens like when a user clicks something or when they type something. We respond to these events by having what are called event listeners. We give an event listener a function to run whenever an event happens. */

/* <button class="event-button">Click me!</button>
<script>
  const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey there!");
  });
</script> */

/*  */

/* <input placeholder="type into me!" class="input-to-copy" />
<p class="p-to-copy-to">Nothing has happened yet.</p>
<script>
  const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');

  input.addEventListener("keyup", function() {
    paragraph.innerText  = input.value;
  });
</script> */

/*  */

/* <style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />
<script>
  const input = document.querySelector('.color-input');
  const paragraph = document.querySelector('.color-box');

  input.addEventListener("change", function() {
    paragraph.style.backgroundColor  = input.value;
  });
</script> */

// ----------------------------------------------------------------------------------------------------------------------------------

// Event delegation

/* If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called event bubbling. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element. */

/* <div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
      if (event.target.tagName === 'button') {
        alert(`You clicked on button ${event.target.innerText}`);
      }
      event.stopPropagation();
  });
</script> */