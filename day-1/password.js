var arg = process.argv[2];

function obfuscate(arg) {
  var password = "";
  var letters = arg.split("");

  for (var i = 0; i < letters.length; i++) {
    switch (letters[i]) {
    case 'a':
      password += '4';
      break;
    case 'e':
      password += '3';
      break;
    case 'o':
      password += '0';
      break;
    case 'l':
      password += '1';
      break;
    default:
      password += letters[i];
    }
  }
  console.log(password);
}

obfuscate(arg);