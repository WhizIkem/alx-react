import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("Test utils functions", () => {

  Test("getFullYear returns current year", () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });

  Test("getFooterCopy with true argument returns correct string", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  Test("getFooterCopy with false argument returns correct string", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  Test("getLatestNotification returns correct string", () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
  });

});
