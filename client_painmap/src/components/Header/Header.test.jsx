import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("Navbar Component", () => {
  render(
      <MemoryRouter>
          <AuthProvider>
            <Header />
          </AuthProvider>
      </MemoryRouter>
  );

  it("displays a navbar with 1 div when user is not logged in", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(1); 
  });

  it("displays a navbar with correct names", () => {
    const nav = screen.getByRole("navigation");
    expect(nav.childNodes[0].textContent).toBe("LoginSignup");
    // expect(nav.childNodes[0].textContent).toBe("Home");
    // expect(nav.childNodes[1].textContent).toBe("Articulate Your Pain");
    // expect(nav.childNodes[2].textContent).toBe("Chat");
    // expect(nav.childNodes[3].textContent).toBe("Medical History");
  });
});
