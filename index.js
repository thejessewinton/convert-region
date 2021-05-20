const path = require("path");

const regions = require("./regions");

let i;

const convertRegion = (input) => {
  input = input.toString().toUpperCase();
  for (i = 0; i < regions.length; i++) {
    if (regions[i][1] == input) {
      return regions[i][0];
    }
  }
};

convertRegion.toAbbr = (input) => {
  input = input.replace(/\w\S*/g, function (txt) {
    return (
      txt.charAt(0).toString().toUpperCase() +
      txt.substr(1).toString().toLowerCase()
    );
  });
  for (i = 0; i < regions.length; i++) {
    if (regions[i][0] == input) {
      return regions[i][1];
    }
  }
};

module.exports = convertRegion;
