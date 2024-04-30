import { it, expect, describe } from "vitest";

describe("Main", () => {
  it("should check for truthy value", () => {
    expect(1).toBeTruthy();
  });
  it("should check if the backend is collectly setup", async () => {
    const response = await fetch("/categories");
    const data = await response.json();
    console.log(data);
    expect(data).toHaveLength(3);
  });
});
