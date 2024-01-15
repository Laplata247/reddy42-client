import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Sticker from ".";

describe("Navbar Component", () => {
  render(
      <MemoryRouter>
        <Sticker />
      </MemoryRouter>
  );

  it("displays menu when the page is rendered", () => {
    const nav = screen.getByRole("menu");
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(2);
  });

});
