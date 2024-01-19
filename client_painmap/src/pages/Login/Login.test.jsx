import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../contexts/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import "vitest-canvas-mock";

import Login from ".";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const heading = screen.getByText("Hi, there!👩‍⚕️");
    expect(heading).toBeInTheDocument();
  });

  it("displays textbox input", () => {
    const email = screen.getByRole("textbox");
    expect(email).toBeInTheDocument();
  });

  it("displays button input", async () => {
    const button = await screen.getByRole('thisButton');
    expect(button).toBeInTheDocument();
  });
});
