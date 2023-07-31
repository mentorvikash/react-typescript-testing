import { render, screen } from "../../../test-utils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  test("reader text correctly", () => {
    // render(<MuiMode />, {
    //   wrapper: AppProvider,
    // });
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toHaveTextContent("mode light");
  });
});
