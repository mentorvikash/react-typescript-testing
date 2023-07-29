// test driven development, firest we write the test case and then develop our application

import Greet1 from "./Greet";
import { render, screen } from "@testing-library/react";

test("if hello present", () => {
  render(<Greet1 />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

test.skip("if props passed", () => {
  render(<Greet1 name="vikash" />);
  const text = screen.getByText(/hello vikash/i);
  expect(text).toBeInTheDocument();
});

test.only("if props not passed", () => {
  render(<Greet1 name="vikash" />);
  const text = screen.getByText(/hell/i);
  expect(text).toBeInTheDocument();
});
