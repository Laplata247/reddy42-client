import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ConsultationPage from ".";
import { ConsultationsProvider } from "../../contexts";

describe("Consultation page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ConsultationsProvider>
            <ConsultationPage />
        </ConsultationsProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders page div correctly", () => {
    const div = screen.getByRole("details");
    expect(div).toBeInTheDocument();
  });


});
