import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import LandingPage from ".";

describe("NotFoundPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
          <LandingPage />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays a button when the page is loaded", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });


});
