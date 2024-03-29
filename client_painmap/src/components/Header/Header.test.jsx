import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
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

  it.skip("takes you to the login page when login is pressed", () => {
    const login = screen.getByRole('login')
    fireEvent.click(login);
    expect(location.pathname).toBe('/');
  });
  it.skip("takes you to the login page when login is pressed", () => {
    const signup = screen.getByRole('signup') 
    fireEvent.click(signup);
    expect(location.pathname).toBe('/');
  });

  it.skip("displays a navbar with correct names", () => {
    const nav = screen.getByRole("navigation");
    const user = mockUseAuthContext().user;
    const isHomePage = mockUseLocation().pathname === '/';

    if (user && !isHomePage) {
      // User is logged in, and it's not the home page
      expect(nav.childNodes[0].textContent).toBe("Home");
      expect(nav.childNodes[1].textContent).toBe("Articulate Your Pain");
      expect(nav.childNodes[2].textContent).toBe("Chat");
      expect(nav.childNodes[3].textContent).toBe("Medical History");
      // Add more assertions based on your actual structure
    } else if (!user && !isHomePage) {
      // User is not logged in, and it's not the home page
      expect(nav.childNodes[0].textContent).toBe("Login");
      expect(nav.childNodes[1].textContent).toBe("Signup");
    } else {
    }
  });
});
