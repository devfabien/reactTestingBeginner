import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable Text", () => {
  const limit = 255;
  const longText = "a".repeat(256);
  const truncatedText = `${longText.substring(0, limit)}...`;
  it("should render the full text if the length is less or equal to 255", () => {
    const text = "My name is devFabien";

    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("should truncate if the length is greater than 255", () => {
    const text = "a".repeat(256);

    render(<ExpandableText text={text} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });
  it("should show the full text when show more button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });
  it("should collapse the text when show less button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    await user.click(button);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });
});
