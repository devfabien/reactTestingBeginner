import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { products } from "../mocks/data";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("Product Details", () => {
  it("should render a list of products", async () => {
    render(<ProductDetail productId={1} />);
    expect(
      await screen.findByText(new RegExp(products[0].name))
    ).toBeInTheDocument();
    expect(
      await screen.findByText(new RegExp(products[0].price.toString()))
    ).toBeInTheDocument();
  });
  it("should render a message if no product is found", async () => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)));

    render(<ProductDetail productId={1} />);
    const message = await screen.findByText(/not found/);
    expect(message).toBeInTheDocument();
  });
});
