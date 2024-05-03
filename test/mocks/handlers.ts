import { http, HttpResponse } from "msw";
import { db } from "./db";
// import { products } from "./data";

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json([
      { id: 1, name: "Electronics" },
      { id: 2, name: "Food" },
      { id: 3, name: "Accesories" },
    ]);
  }),
  ...db.product.toHandlers("rest"),

  // http.get("/products", () => {
  //   return HttpResponse.json(products);
  // }),
  // http.get("/products/:id", ({ params }) => {
  //   const id = parseInt(params.id as string);
  //   const product = products.find((product) => product.id === id);
  //   if (!product) return new HttpResponse(null, { status: 404 });
  //   return HttpResponse.json(product);
  // }),
];
