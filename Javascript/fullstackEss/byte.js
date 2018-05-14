// BYTE OF COMPUTER SCIENCE

// 1. Linear Search
function linearSearch(val, arr) {
    var flag = false;
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            flag = true;
            index = i;
        }
    }
    if (flag === true) {
        console.log("Linear Search is TRUE, found at index:", index);
    }
    else {
        console.log("Linear Search is FALSE!");
    }
}
linearSearch(8, [24, 8, 23, 3]);
linearSearch(-99, [24, 8, 23, 3]);

console.log("**********");

// 2.a. iSum - Iterative
function iSumIter(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum)
}
iSumIter(5);

// 2.b. iSum - Recursive
function iSumRec(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num + iSumRec(num - 1);
    }
}
iSumRec(5)

console.log("**********");

// 3.a. iFactorial - Iterative
function iFactorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    console.log(product);
}
iFactorial(5);

// 3.b. rFactorial = Recursive
function rFactorial(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num * rFactorial(num - 1);
    }
}
rFactorial(5);

console.log("**********");

// 4.a. iFibbonacci - Iterative
function iFibbonacci(num) {
    var fibs = [0, 1];
    for (var i = 0; i < num; i++) {
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
    }
    console.log(fibs[0]);
}
iFibbonacci(5);

// 4.b. rFibbonacci - Recursive
function rFibbonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    else {
        return rFibbonacci(num - 1) + rFibbonacci(num - 2);
    }
}
rFibbonacci(5);

console.log("**********");

// 5.a. iBS - Iterative
function iBS(arr, num) {
    var flag = false;
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            flag = true;
            index = i;
        }
    }
    if (flag === true) {
        console.log("iBS is TRUE, found at index:", index)
    }
    else {
        console.log("iBS is FALSE!");
    }
}
iBS([-90, -19, 0, 2, 12, 29, 33, 190, 320], 5);
iBS([-90, -19, 0, 2, 12, 29, 33, 190, 320], 12);

// 5.b. rBS - Recursive
function rBS(arr, num) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return i;
            }
            var found = rBS(arr[i].items, num);
            if (found) {
                return found;
            }
        }
    }
}
rBS([-90, -19, 0, 2, 12, 29, 33, 190, 320], 5);
rBS([-90, -19, 0, 2, 12, 29, 33, 190, 320], 12);

console.log("**********");

// Bit Manipulation - WIP!

// END OF BYTE OF COMPUTER SCIENCE
// https://repl.it/@chelxx/JS-ByteofCompScience