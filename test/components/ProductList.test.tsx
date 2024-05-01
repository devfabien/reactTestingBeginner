import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";

describe("Product list", () => {
  it("should render the list of products", async () => {
    render(<ProductList />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
});
