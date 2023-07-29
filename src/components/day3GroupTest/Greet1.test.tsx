// Coverage will help use to test how much of our code in covered with our testing library
// Add a coverage scrip
//

import Greet4 from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Test Group", () => {
  test("if props passed", () => {
    render(<Greet4 name="vikash" />);
    const text = screen.getByText(/hello vikash/i);
    expect(text).toBeInTheDocument();
  });

  test("if props not passed", () => {
    render(<Greet4 name="vikash" />);
    const text = screen.getByText(/hell/i);
    expect(text).toBeInTheDocument();
  });
});
