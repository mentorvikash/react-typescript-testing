import Greet1 from "./Greet";
import { render, screen } from "@testing-library/react";

test("if hello present", () => {
  render(<Greet1 />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});
