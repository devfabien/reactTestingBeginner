import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("Search box", () => {
  const renderSearchBox = () => {
    const onChangeMock = vi.fn();
    render(<SearchBox onChange={onChangeMock} />);
    return {
      input: screen.getByPlaceholderText(/search/i),
      user: userEvent.setup(),
      onChange: onChangeMock,
    };
  };

  it("should render an input field for searching", () => {
    const { input } = renderSearchBox();
    expect(input).toBeInTheDocument();
  });
  it("should call onChange function when input text is not empty and enter is pressed", async () => {
    const { input, user, onChange } = renderSearchBox();

    const searchTerm = "searchTerm";
    await user.type(input, `${searchTerm}{enter}`);

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });
  it("should not call onChange function when input text is empty and enter is pressed", async () => {
    const { input, user, onChange } = renderSearchBox();

    await user.type(input, "{enter}");

    expect(onChange).not.toHaveBeenCalled();
  });
});
