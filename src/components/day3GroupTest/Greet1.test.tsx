// test driven development, firest we write the test case and then develop our application
// Test file naming convention
// .test.js .test.tsx | .spec.js .spec.tsx
// file with .js or .tsx  suffix in __tests__folder

import Greet1 from "./Greet";
import { render, screen } from "@testing-library/react";

test("if hello present", () => {
  render(<Greet1 />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

// we can use describe.only and describe.skip
// we can also produce nexted describe

// it can use in place of test | fit in palce of test.only | xit in palce of test.skip

describe("Test Group", () => {
  it("if props passed", () => {
    render(<Greet1 name="vikash" />);
    const text = screen.getByText(/hello vikash/i);
    expect(text).toBeInTheDocument();
  });

  fit("if props not passed", () => {
    render(<Greet1 name="vikash" />);
    const text = screen.getByText(/hell/i);
    expect(text).toBeInTheDocument();
  });
});

describe("Test Group Nested", () => {
  describe("Nested level 1", () => {
    test("if props passed", () => {
      render(<Greet1 name="vikash" />);
      const text = screen.getByText(/hello vikash/i);
      expect(text).toBeInTheDocument();
    });
  });
  test("if props not passed", () => {
    render(<Greet1 name="vikash" />);
    const text = screen.getByText(/hell/i);
    expect(text).toBeInTheDocument();
  });
});
