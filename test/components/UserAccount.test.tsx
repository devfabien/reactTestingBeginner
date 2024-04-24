import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("User account", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Fabien" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it("should render an edit button if user is admin", () => {
    const user: User = { id: 1, name: "Fabien", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render an edit button if user is not admin", () => {
    const user: User = { id: 1, name: "Fabien" };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
