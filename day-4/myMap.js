var myMap = function(arr, cb) {
  resultArr = [];
  arr.forEach(function (item, i) {
    var result = cb(arr[i]);
    resultArr.push(result);
  });
  return resultArr;
};

var words = ["ground", "control", "to", "major", "tom"];

var newWords = myMap(words, function(word) {
  return word.length;
});

console.log(newWords);