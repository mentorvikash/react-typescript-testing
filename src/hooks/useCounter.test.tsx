import { renderHook, screen } from "@testing-library/react";
import useCounter from "./useCounter";

describe("UseCounter", () => {
  test("check if initial count render", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).tobe("0");
  });
});
