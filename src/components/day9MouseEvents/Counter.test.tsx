import Counter from "./Counter";
import user from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";

describe("Testing counter component", () => {
  test("if counter element pressent", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(counterElement).toBeInTheDocument();
  });

  test("if initial counter value is 0", () => {
    render(<Counter />);
    const counterELement = screen.getByRole("heading", {
      level: 3,
    });
    expect(counterELement).toHaveTextContent("0");
  });

  test("if increment and decrement button click works", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await act(async () => await user.click(incrementBtn));
    const counterElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(counterElement).toHaveTextContent("1");

    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });

    await act(async () => await user.click(decrementBtn));

    expect(counterElement).toHaveTextContent("0");
  });
});

// ========== Mouse Events =================
// user-event is used to trigger the events

//========= Pointer Interaction =================
// convienience api is internally called pointer api and thet includes
// click() | dblClick() | tripleCLick() | hover() | unhover()
// we have to wrap user.click() evnets in "act" function which is a asycn fn

// Low level pointer api - where pointer accept an object as arrgument
// pointer({keys: '[MouseLeft]'})
// pointer({keys: '[MouseLeft][MouseRight]'}) -> Left click followed by right click
// pointer('[MouseLeft][MouseRight]') -> Left click followed by right click
// pointer('[MouseLeft>]') -> Click mouse without realising click
// pointer('[/MouseLeft]') -> Relesing previous click event
