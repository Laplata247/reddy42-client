import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import NotFound from ".";

describe("NotFoundPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
          <NotFound />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays Page not Found header", () => {
    const notFoundText = screen.getByText(/Page not found/i);
    expect(notFoundText).toBeInTheDocument();
  });

  it("displays link to go back Home", () => {
    const backLink = screen.getByRole("link", { name: /Home/i });
    expect(backLink).toBeInTheDocument();
  });
});
