import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from ".";

describe("Navbar Component", () => {
  render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
  );

  it("displays a navbar with 4 children", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(4);
  });

  it("displays a navbar with correct names", () => {
    const nav = screen.getByRole("navigation");
    expect(nav.childNodes[0].textContent).toBe("Home");
    expect(nav.childNodes[1].textContent).toBe("Map Pain");
    expect(nav.childNodes[2].textContent).toBe("Chat");
    expect(nav.childNodes[3].textContent).toBe("Medical History");
  });
});
