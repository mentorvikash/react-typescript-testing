import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("if revive present", () => {
  render(<App />);
  const expectedText = screen.getByText(/revive/i);
  expect(expectedText).toBeInTheDocument();
});

test("if present", () => {
  render(<App />);
  const text = screen.getByText(/camel/i);
  expect(text).toBeInTheDocument();
});
