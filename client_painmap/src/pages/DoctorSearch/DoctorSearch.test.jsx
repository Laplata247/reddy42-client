import React from "react";
import "vitest-canvas-mock";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import DoctorSearch from ".";
import { ConsultationsProvider } from "../../contexts";
import { AuthProvider } from "../../contexts/AuthContext";

describe("DoctorSearch Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
              <AuthProvider> {/* Wrap your component in AuthProvider */}
                <ConsultationsProvider>
                  <DoctorSearch />
                </ConsultationsProvider>
              </AuthProvider>
            </BrowserRouter>
        );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("renders without crashing", () => {
      const doctorSearchContainer = screen.getByTestId("doctor-search-container");
      expect(doctorSearchContainer).toBeInTheDocument();
    });
  
    it("displays loading message while consultations are loading", () => {
      const loadingMessage = screen.getByText("Loading...");
      expect(loadingMessage).toBeInTheDocument();
    });
})