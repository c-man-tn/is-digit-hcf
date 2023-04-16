const { isDigit } = require("../src/index.ts");

describe("is-digit-hcf tests", () => {
  it("isDigit w/ alpha", () => {
    let c: string = "g";
    expect(isDigit(c)).toBeFalsy();
  });
  it("isDigit w/ comma", () => {
    let c: string = ",";
    expect(isDigit(c)).toBeFalsy();
  });
  it("isDigit w/ digit", () => {
    let c: string = "3";
    expect(isDigit(c)).toBeTruthy();
  });
});
