const path = require("path");

import { regions } from "./regions";

let i: number;

const convertRegion = (input: string) => {
  input = input.toUpperCase();
  for (i = 0; i < regions.length; i++) {
    if (regions[i][1] == input) {
      return regions[i][0];
    }
  }
};

convertRegion.toAbbr = (input: string) => {
  input = input.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  for (i = 0; i < regions.length; i++) {
    if (regions[i][0] == input) {
      return regions[i][1];
    }
  }
};

module.exports = convertRegion;
