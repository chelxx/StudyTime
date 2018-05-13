// BYTE OF COMPUTER SCIENCE

// 1. Linear Search
function linearSearch(val, arr) {
    var flag = false;
    var index = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        flag = true;
        index = i;
      }
    }
    if(flag === true) {
      console.log("Linear Search is TRUE, found at index:", index);
    }
    else {
      console.log("Linear Search is FALSE!");
    }
  }
  linearSearch(8, [24, 8, 23, 3]);
  linearSearch(-99, [24, 8, 23, 3]);