import { render, screen, waitFor } from "@testing-library/react";
import TagList from "../../src/components/TagList";

describe("Taglist", () => {
  it("should render the component", () => {
    render(<TagList />);

    waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems.length).toBeGreaterThan(0);
    });
  });
});
