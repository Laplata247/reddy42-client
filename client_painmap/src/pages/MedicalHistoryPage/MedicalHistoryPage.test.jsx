import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { ConsultationsProvider } from '../../contexts'
import { AuthProvider } from "../../contexts/AuthContext"

import "vitest-canvas-mock";


expect.extend(matchers);

import MedicalHistoryPage from ".";

describe("MedicalHistoryPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ConsultationsProvider>
            <MedicalHistoryPage />
          </ConsultationsProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays correct headers", () => {
    const heading1 = screen.getByRole('heading', { level: 1, name: /My Medical History/i });
    const heading2Hereditary = screen.getByRole('heading', { level: 2, name: /Hereditary conditions:/i });
    const heading2Family = screen.getByRole('heading', { level: 2, name: /Family members:/i });
  
    expect(heading1).toBeInTheDocument();
    expect(heading2Hereditary).toBeInTheDocument();
    expect(heading2Family).toBeInTheDocument();
  });

  it("toggles the hereditary form visibility on button click", () => {
    const addHereditaryConditionsButton = screen.getByText('Add more hereditary conditions');
    addHereditaryConditionsButton.click();
    const hereditaryForm = screen.getByRole('hereditary-form');
    expect(hereditaryForm).toBeInTheDocument();
  });  

  it("displays 'Add more family members' button", () => {
    const addFamilyMembersButton = screen.getByText('Add more family members');
    expect(addFamilyMembersButton).toBeInTheDocument();
  });

});
