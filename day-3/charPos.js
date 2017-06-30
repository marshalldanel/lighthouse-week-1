function countLetters(str) {
  var letters = str.split(' ').join('');
  var counter = {};

  for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      if (counter[letter] === undefined){
        counter[letter] = [i];
      } else {
        counter[letter].push(i);
      }
  }
  console.log(counter);
  return(counter);
}

countLetters("lighthouse in the house");