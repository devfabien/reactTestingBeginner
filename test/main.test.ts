import { describe, expect, it } from "vitest";
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
    const product = db.product.create({ name: "Apple" });
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
