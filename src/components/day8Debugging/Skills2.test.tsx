import Skills1 from "./Skills2";
import { render, screen, logRoles } from "@testing-library/react";

describe("Testing skill component", () => {
  const skills = ["painting", "singing", "dancing", "running"];
  test("if signin button present", () => {
    render(<Skills1 skills={skills} />);
    // screen.debug();
    const itItemPresent = screen.getByRole("button", {
      name: "login",
    });
    expect(itItemPresent).toBeInTheDocument();
    // screen.debug();
  });

  test("if learnig button appear after some time", async () => {
    render(<Skills1 skills={skills} />);
    // const view = render(<Skills1 skills={skills} />);
    // logRoles(view.container);
    const learingButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(learingButton).toBeInTheDocument();
  });
});

// Either we use screen.debug() to see what causes the error
// use logRoles to see all the roles all dom node elements
// user testing playground to generate the best qeury to get any element in react
