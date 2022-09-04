import { convertBooleanValue } from "./db";

describe("convertBooleanValue", () => {
  it("should return true", () => {
    expect(convertBooleanValue(1)).toBe(true);
  });

  it("should return false", () => {
    expect(convertBooleanValue(0)).toBe(false);
  });
});
