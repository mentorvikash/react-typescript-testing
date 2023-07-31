import Skills from "./Skills";
import { render, screen } from "@testing-library/react";

describe("Testing skill component", () => {
  const skills = ["painting", "singing", "dancing", "running"];
  test("if list present", () => {
    render(<Skills skills={skills} />);
    const itItemPresent = screen.getByRole("list");
    expect(itItemPresent).toBeInTheDocument();
  });

  test("all skills present", () => {
    render(<Skills skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);

    const headingElementh1 = screen.getByRole("heading");
    expect(headingElementh1).toBeInTheDocument();

    const headingElementbyTextRegex = screen.getByText(/^LiSt Of Skills$/i); // Full text ignore case
    expect(headingElementbyTextRegex).toBeInTheDocument();

    const headingElementbyText = screen.getByText((content) =>
      content.startsWith("List of"),
    );

    expect(headingElementbyText).toBeInTheDocument();
  });
});

// first argument to be passed in getByRole and other qeury is called textMatch
// TextMatch could be a string, regex or function
// screen.getByText("Hello world");  -> Full string match
// screen.getByText("Hello world", {exact: false});  -> substring match and ignore case
// screen.getByText(/Hello world/) -> Full match
// screen.getByText(/Hello world/i) -> -> substring match and ignore case
// screen.getByText(/^Hello world$/i) -> -> full string match and ignore case
// screee.getByText((content) => content.startsWith("Hello world)) -> this will return boolean
