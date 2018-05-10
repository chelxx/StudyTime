// PREREQUISITES

// 1. Print 1 to 255
function print1255() {
    for(var i = 0; i < 256; i++) {
        console.log(i);
    }
}
print1255();

console.log("**********");
  
// 2. Print odd numbers 1 to 1000
function printOdd() {
  for(var i = 0; i < 1001; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdd();

console.log("**********");
  
// 3. Print SUM of all odd numbers 1 to 5000
function printSumOdd() {
  var sum = 0;
  for(var i = 0; i < 5000; i++) {
    if(i % 2 !== 0) {
      sum = sum + i;
    }
  }
  console.log("Sum of all Odd Numbers:", sum)
}
printSumOdd();

console.log("**********");
  
// 4. Iterate through a given array
function iterateArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
iterateArr([1,3,5,7,9,13]);

// 5. Print MAX
function printMax(arr) {
  var max = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Max:", max);
}
printMax([-3, 3, 5, 7]);

console.log("**********");
  
// 6. Print AVERAGE
function printAvg(arr) {
  var avg = 0;
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  console.log("Sum:", sum);
  avg = sum/arr.length;
  console.log("Average:", avg)
}
printAvg([1,3,5,7,20]);

console.log("**********");
  
// 7. Array with odd numbers 1 to 255
function arrayOdd() {
  var y = [];
  for(var i = 0; i < 256; i++) {
    if(i % 2 !== 0) {
      y.push(i);
    }
  }
  console.log(y);
}
arrayOdd();

console.log("**********");
  
// 8. Return the number of values in the array greater than y
function greaterY(arr, y) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      count = count + 1;
    }
  }
  console.log("Number of values greater than Y:", count);
}
greaterY([1,3, 5, 7], 3);

console.log("**********");
  
// 9. Square each value in the array
function squareArrayValue(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  console.log(arr);
}
squareArrayValue([1,5, 10, -2]);

console.log("**********");
  
// 10. Eliminate negative numbers
function eliminateNeg(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}
eliminateNeg([1,5, 10, -2]);

console.log("**********");
  
// 11. Print MAX, MIN, AVG of an array
function printMaxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  var avg = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  console.log("Max:", max);
  console.log("Min:", min);
  avg = sum/arr.length;
  console.log("Avg:", avg)
}
printMaxMinAvg([1,5, 10, -2]);

console.log("**********");
  
// 12. Shifting the values in an array
function shiftValues(arr) {
  for(var i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i]
  }
  arr[arr.length-1] = 0;
  console.log(arr);
}
shiftValues([1,5, 10, 7, -2]);

console.log("**********");
  
// 13. Replace negative number to "Dojo"
function replaceNegNum(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
}
replaceNegNum([-1, -3, 2]);

console.log("**********");
  
// 14. Create an array with 10 random numbers
function randomArray() {
  var arr = [];
  for(var i = 0; i < 10; i ++) {
    var random = Math.floor(Math.random()*101);
    arr.push(random);
  }
  console.log(arr);
}
randomArray();

console.log("**********");
  
// 15. Swap the first and last value of an array
function swapValue(arr) {
  temp = arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1] = temp;
  console.log(arr);
}
swapValue([2, 3, 5, 7, 6]);

console.log("**********");
  
// 16. Reverse the values in an array
function reverseArray(arr) {
  for(var i = 0; i < Math.floor(arr.length/2); i++) {
    temp = arr[arr.length-(i+1)];
    arr[arr.length-(i+1)] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
reverseArray([-3,5,1,3,2,10]);

console.log("**********");
  
// 17. Insert a number x at a specific index y
function insertNumber(x,y) {
  var arr = [1,3,5,7];
  for(var i = arr.length-1; i > y; i--) {
    arr[i] = arr[i-1];
  }
  arr[y] = x;
  console.log(arr);
}
insertNumber(10,2)

console.log("**********");
  
// 18. Removes negative numbers from an array
function removeNegative(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      if (i !== arr.length - 1) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
      }
      arr.pop();
    }
  }
  console.log(arr);
}
removeNegative([0, -1, 2, -3, 4, -5, 6]);

// END OF PREREQUISITES