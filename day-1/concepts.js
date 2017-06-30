/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

// a custom function written by you (you must define it too!)

function joinList(words) {
  var joined = [];

  for (var i = 0; i < words.length; i++) {
    joined += words[i];
    if (i < words.length - 1) {
      joined += ', ';
    }
  }
  return joined;
}

var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");

