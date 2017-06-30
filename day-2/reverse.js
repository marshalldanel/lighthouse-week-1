var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse() {
  return input.split('').reverse().join('');
}
