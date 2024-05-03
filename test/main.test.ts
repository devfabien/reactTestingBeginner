import { it, expect, describe } from "vitest";
import { faker } from "@faker-js/faker";

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
  it("should check fakerjs", () => {
    console.log({
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 1, max: 100 }),
    });
  });
});
