import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import GenderSelection from ".";
import { GenderProvider } from "../../contexts";

describe("Sex selection page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
         < GenderProvider>
            <GenderSelection />
         </GenderProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders page elements correctly ", () => {
    const div = screen.getByRole("selector");
    const header = screen.getByText(/Choose Sex/)
    expect(header).toBeInTheDocument()
    expect(div).toBeInTheDocument();
    expect(div.children.length).toBe(3)
  });
  it("two buttons are displayed for the user", () => {
    const butt1 = screen.getByRole('butt1')
    const butt2 = screen.getByRole('butt2')
    expect(butt1).toBeInTheDocument()
    expect(butt2).toBeInTheDocument()
  })

});
