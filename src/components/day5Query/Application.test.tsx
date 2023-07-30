import Application from "./Application";
import { screen, render } from "@testing-library/react";

describe("applications", () => {
  test("render correctly", () => {
    render(<Application />);

    const headingElementh1 = screen.getByRole("heading", {
      //   name: "heading 1",
      level: 1,
    });
    expect(headingElementh1).toBeInTheDocument();

    const headingElementh2 = screen.getByRole("heading", {
      //   name: "heading 2",
      level: 2,
    });
    expect(headingElementh2).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioELement = screen.getByRole("textbox", {
      name: "bio",
    });
    expect(bioELement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    // getByLableText
    const selectElementByL1 = screen.getByLabelText("Name");
    expect(selectElementByL1).toBeInTheDocument();

    // two element with same label text but different element
    const selectfirst = screen.getByLabelText("bio", {
      selector: "input",
    });

    expect(selectfirst).toBeInTheDocument();
  });
});

// =============
// getByRole... should be first preference when trageting element if not possible then go for other query
// Qurery with React testing library
// find single => getBy.. | queryBy.. | findBy..
// find multiple => getAllBy.. | queryAllBy.. | findAllBy..
// suffix to use intead of ..
// Role | LabelText | PlaceholderText | Text | DisplayValue | AltText | Title | TestId

// getByRole -> Role referes to ARIA (Accessible Rich Internet Applications) role which provides secmentic meaning to content ensure people using assistive technologies are able to access the content.
// Buttone - button role
// Anchor - line role
// h1 to h6 - heading role
// checkbox - checkbox role
// radio btn - radio role
// input - textbox role
// select - combobox role

// to use anchor element as button in navbar. You have to add role="button"
// To see all types of roles use
// https://testing-library.com/docs/queries/byrole  and   https://www.w3.org/TR/html-aria/#docconformance

// ===========
// getByLabelText method is used to tarat input elements by its lable tag
// if two lables have same label then we can use slelector in optional parameter their we specify the element to be target.
