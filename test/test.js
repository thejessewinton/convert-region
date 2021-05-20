import { expect } from "chai";
import convertRegion from "../index";

describe("convertRegion()", function () {
  it("should accept a string", function () {
    expect(convertRegion("CA")).to.match("California");
  });
});

describe("convertRegion().toAbbr", function () {
  it("should accept a string", function () {
    expect(convertRegion.toAbbr("California")).to.match("CA");
  });
});
