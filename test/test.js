const chai = require("chai");
const convertRegion = require("../dist");

const expect = chai.expect;

describe("abbreviation to full name", function () {
  const fullNameOutput = convertRegion("CA");
  it("should accept a string", function () {
    expect(fullNameOutput).to.equal("California");
  });
});

describe("full name to abbreviation", function () {
  const abbrOutput = convertRegion.toAbbr("California");
  it("should accept a string", function () {
    expect(abbrOutput).to.equal("CA");
  });
});
