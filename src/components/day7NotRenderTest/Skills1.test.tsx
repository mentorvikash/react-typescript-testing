import Skills1 from "./Skills1";
import { render, screen } from "@testing-library/react";

describe("Testing skill component", () => {
  const skills = ["painting", "singing", "dancing", "running"];
  test("if signin button present", () => {
    render(<Skills1 skills={skills} />);
    const itItemPresent = screen.getByRole("button", {
      name: "login",
    });
    expect(itItemPresent).toBeInTheDocument();
  });

  test("if button not present", () => {
    render(<Skills1 skills={skills} />);

    // getByRole gives error for not -> user queryBy
    // const buttonNotPresent = screen.getByRole("button", {
    //   name: "Start Learning",
    // });

    const buttonNotPresent = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(buttonNotPresent).not.toBeInTheDocument();
  });

  test("if learnig button appear after some time", async () => {
    render(<Skills1 skills={skills} />);
    const learingButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      },
    );
    expect(learingButton).toBeInTheDocument();
  });

  // test("if login button diappear after some time", () => {
  //   render(<Skills1 skills={skills} />);

  //   try {
  //     setTimeout(() => {
  //       const loginButton = screen.queryByRole("button", {
  //         name: "logi",
  //       });
  //       expect(loginButton).not.toBeInTheDocument();
  //     }, 2000);
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   }
  // });
});

// make query for element not displayed to ui
// queryBy.. will either return targetd element or return null && through error if more then one match found
// queryByAll.. will either return targetd element or return empty error if not matched
// queryBy and queryByAll can be used for not query
// all suffix works with getBy can also work with queryBy

// ==========findBy
// findBy.. query should be used when you need to check if some element appears after sometime or disappear after some time
// findBy.. returns a promise, when resolved an element which matches query get found
// findBy.. when rejected, if no element found | more then one element found
// findByAll.. returns a promise, when resolved array of elements which matches query
// findBy.. when rejected, if no element found

// NOTE : All findBY.. findByALL.. getBy.. getByAll.. queryBy.. queryByAll provided by RTL Query
// Still we can define our manual query - we can use querySelector Dom query, try of above it unless it needed because as an UI property that is not visible to end user
