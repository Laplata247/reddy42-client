import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import HomePage from ".";

describe("NotFoundPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
          <HomePage />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders page element ", () => {
    const wrapper = screen.getByRole("PageWrapper");
    expect(wrapper).toBeInTheDocument();
  });
  it("has the correct number of children", () => {
    const wrapper = screen.getByRole("PageWrapper");
    expect(wrapper.children.length).toBe(5)
  })
  it("displays a welcome message", () => {
    const welcome = screen.getByText(/Welcome back, name!/i);
    expect(welcome).toBeInTheDocument();
  })
});
