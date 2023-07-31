import { act, render, renderHook, screen } from "@testing-library/react";
import useCounter from "./useCounter";

describe("UseCounter", () => {
  test("check if initial count render", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should expect same intitial couunt", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("couter should increment", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("couter should decrement", () => {});
  const { result } = renderHook(useCounter);
  act(() => result.current.decrement());
  expect(result.current.count).toBe(-1);
});
