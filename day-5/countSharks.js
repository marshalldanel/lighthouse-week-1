module.exports = {
  sharks: 5,
  countsharks: function() {
    console.log("There are " + this.sharks + " sharks.");
    if (this.sharks > 2) {
      console.log("The sharks are eating the babies.");
    }
  }
};