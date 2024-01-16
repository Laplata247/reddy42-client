import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
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

  it("opens the menue when clicking on the arrow", () => {
    const nav = screen.getByRole("menu");
    const arrow = screen.getByRole("arrow");
    expect(arrow).toBeInTheDocument();
    fireEvent.click(arrow)
    expect(nav.id).toBe("stickerSelectorClosed");
    fireEvent.click(arrow)
    expect(nav.id).toBe("stickerSelectorOpen");
  });

  it("changes the active sticker when clicking on one", () => {
    const sticker = screen.getByRole("sticker")
    expect(sticker.className).toBe("inactive");
    fireEvent.click(sticker)
    expect(sticker.className).toBe("active")
  })

  it("changes the size of the sticker when the bar is moved", () => {
    const scale = screen.getByRole("scale")
    fireEvent.change(scale)

  })


});
