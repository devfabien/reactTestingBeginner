import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("Order status selector", () => {
  const renderOrderStatusSelector = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );
    return {
      trigger: screen.getByRole("combobox"),
      getOptions: () => screen.findAllByRole("option"),
    };
  };
  it("should render the component with new as the default value", () => {
    const { trigger } = renderOrderStatusSelector();
    expect(trigger).toHaveTextContent(/new/i);
  });
  it("should render the correct statuses", async () => {
    const { trigger, getOptions } = renderOrderStatusSelector();

    const user = userEvent.setup();
    await user.click(trigger);

    const options = await getOptions();
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
