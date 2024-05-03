import { it, expect, describe } from "vitest";
import { faker } from "@faker-js/faker";
import { db } from "./mocks/db";

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
    const product = db.product.create();
    console.log(product);
  });
});
