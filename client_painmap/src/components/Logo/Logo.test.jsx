import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Logo from ".";

describe("logo", () => {
  render(
      <MemoryRouter>
        <Logo/>
      </MemoryRouter>
  );

  it("Logo is rendered", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

});
