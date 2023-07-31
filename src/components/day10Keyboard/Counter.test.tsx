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
  test("render count valut to 10 after click on setBtn", async () => {
    render(<Counter />);

    const counterELement = screen.getByRole("heading");

    const inputElement = screen.getByRole("spinbutton");
    await act(async () => await user.type(inputElement, "10"));

    const setButton = screen.getByRole("button", {
      name: "Set Count",
    });

    await act(async () => await user.click(setButton));

    expect(counterELement).toHaveTextContent("10");
  });

  test("element tab should be work in right order", async () => {
    render(<Counter />);
    const inputCount = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: "Set Count",
    });
    await act(async () => await user.tab());
    expect(inputCount).toHaveFocus();
    await act(async () => await user.tab());
    expect(setBtn).toHaveFocus();
    // await act(async () => await user.clear(inputCount));
    // expect(inputCount).toHaveValue(null);

    const selectElement = screen.getByRole("listbox");
    await act(async () => await user.selectOptions(selectElement, ["1", "C"]));
    // expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
    await act(async () => await user.deselectOptions(selectElement, ["1"]));
    // expect(screen.getByRole("option", { name: "A" }).selected).toBe(false);

    // Have to figure out test query for select option
    // const selectElement = screen.getByRole("listbox");
    // expect(selectElement).toBeInTheDocument();
    // const optionA = screen.getByRole("option", {
    //   name: "A",
    // });
    // expect(optionA).toBeInTheDocument();
  });

  // test("file upload", async () => {
  //   render(<Counter />);
  //   const file = new File(["hello"], "logo192.png", { type: "image/png" });
  //   const uploadFile = screen.getByLabelText(/Upload file/i);
  //   await act(async () => await user.upload(uploadFile, file));
  //   console.log("files ", uploadFile.files[0]);
  //   expect(uploadFile.files[0]).toBe(file);
  //   expect(uploadFile.files.item[0]).toBe(file);
  //   expect(uploadFile.files).toHaveLength("1");
  // });
});

// ========== Keyboard Events =================
// type is a utility api
// tab is a convenience api (only one convenience api)

// we also have cut() | copy() | paste() apis
