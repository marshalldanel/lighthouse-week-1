// The second argument/parameter is expected to be a function
// Original code

// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// Refactored

// Modify the callback function in the previous example so that logs the
// index of the array where Waldo is found, ie. "Found Waldo at index 2!".

function findWaldo(arr, found) {
   arr.forEach(function(item, i) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
