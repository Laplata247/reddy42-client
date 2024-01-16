import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { ConsultationsProvider } from '../../contexts'

expect.extend(matchers);

import MedicalHistoryPage from ".";

describe("MedicalHistoryPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ConsultationsProvider>
          <MedicalHistoryPage />
        </ConsultationsProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays one header with correct text", () => {
    const heading1 = screen.getByRole('heading', {level: 1})
    expect(heading1).toBeInTheDocument();
    expect(heading1).toHaveTextContent('Medical History Page')
  });

  it("displays at least one previous condition", () => {
    const heading3 = screen.getAllByRole('heading', {level: 3})
    expect(heading3).toBeDefined();
  });

  it("displays links to consultations", () => {
    const link = screen.getAllByRole("link");
    expect(link).toBeDefined()
  });
});
