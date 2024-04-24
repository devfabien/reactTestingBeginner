import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("User List", () => {
  it("should render no users message when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
  it("should render a list of users when they are provided", () => {
    const users: User[] = [
      { id: 1, name: "Fabien" },
      { id: 2, name: "Olivier" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
