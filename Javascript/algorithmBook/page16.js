// ALGORITHM BOOK - CHAPTER 1 - PAGE 16

// SETTING AND SWAPPING
// Set myNumber to 42. Set myName to your name. Now swap myNumber and myName and vice versa.
var myNumber = 42;
var myName = "Chelsea";
var temp;

temp = myNumber;
myNumber = myName;
myName = temp;

console.log("myNumber:", myNumber);
console.log("myName:", myName);

console.log("*******************");

// *******************
// PRINT -52 TO 1066
// Print integers from -52 to 1066 using a FOR loop.
for (var i = -52; i < 1067; i++) {
    console.log(i);
}

console.log("*******************");

// *******************
// DONT WORRY, BE HAPPY
// Create beCheerful(). Within it, console.log string "good morning!" 98 times.
function beCheerful() {
    for (var i = 1; i < 99; i++) {
        console.log(`${i}: Good Morning!`);
    }
}
beCheerful();

console.log("*******************");

// *******************
// MULTIPLES OF THREE - BUT NOT ALL
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (var i = -300; i < 1; i++) {
    if (i % 3 === 0) {
        if (i != -3 && i != -6) {
            console.log(i);
        }
    }
}

console.log("*******************");

// *******************
// PRINTING INTEGERS WITH WHILE
// Print integers from 2000 to 5280 using WHILE
i = 2000
while (i < 5281) {
    console.log(i);
    i++;
}

console.log("*******************");

// *******************
// YOU SAY IT'S YOUR BDAY
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
function birthDayMonth(num1, num2) {
    if (num1 === 12 || num1 === 23 || num2 === 23 || num2 === 12) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day!");
    }
}
birthDayMonth(12, 23);
birthDayMonth(11, 11);

console.log("*******************");

// *******************
// LEAP YEAR - WIP
// Write a fxn that determines whether a given year is a leap year. If a leap year is divisible by four it is a leap year, unless it is divisible by 100. However, if it is divisile by 400 then it is.
function leapYear(year) {
    var isLeap = false;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            isLeap = false;
        }
        if (year % 400 === 0) {
            isLeap = true;
        }

    }
    if (isLeap === true) {
        console.log(`${year} is a Leap Year!`);
    }
    else {
        console.log(`${year} is NOT a Leap Year!`);
    }
}
leapYear(2016);