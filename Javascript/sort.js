//SORTS

// 1. Bubble Sort
function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sort:", arr)
}
bubbleSort([5, 8, 3, 6, 10, 1]);

// 2. Selection Sort
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log("Selection Sort:", arr);
}
selectionSort([5, 8, 3, 6, 10, 1]);

console.log("**********");

// 3. Insertion Sort - WIP
function insertionSort(arr, val) {

}
insertionSort();

console.log("**********");