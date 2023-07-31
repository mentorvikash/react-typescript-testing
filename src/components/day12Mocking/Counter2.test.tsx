import { act } from "react-dom/test-utils";
import { render, screen } from "../../../test-utils";
import Counter2 from "./Counter2";
import userEvent from "@testing-library/user-event";

describe("Couner2", () => {
  test("test the intitial value", async () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <Counter2
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementElement = screen.getByRole("button", {
      name: "Decrement",
    });
    await act(async () => await userEvent.click(incrementElement));
    await act(async () => await userEvent.click(decrementElement));
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});

// testing component with mock function then use as as function.
// here we learn to test function passed to any fucntion as as props and check its functionality. by using mock function provided by jest.
