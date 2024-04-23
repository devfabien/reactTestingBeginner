import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render hello with the name when provided", () => {
    render(<Greet name="Fabien" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/fabien/i);
  });
  it("should render a login button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
