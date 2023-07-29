import Greet from "../components/day1unitTest/Greet";
import { render, screen } from "@testing-library/react";

test("if hello present", () => {
  render(<Greet />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});
