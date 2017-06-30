var arg = process.argv.slice(2).forEach(function(arg) {
  var newString = [];
  newString.push(arg);
  console.log(newString);
});

//process.argv.slice(2).forEach(reverse);