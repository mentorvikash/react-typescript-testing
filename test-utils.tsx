import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import AppProvider from "./src/components/day11withMui/AppProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
