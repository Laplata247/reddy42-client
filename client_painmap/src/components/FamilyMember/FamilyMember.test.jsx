import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "vitest-canvas-mock";


import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FamilyMember from ".";
import { AuthProvider } from "../../contexts/AuthContext";

describe("FamilyMember component", () => {
  let sampleUser;

  beforeEach(() => {
    // Set up a sample user for testing
    sampleUser = {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      hereditary_conditions: [
        { name: "Condition1", description: "Description1" },
        { name: "Condition2", description: "Description2" },
      ],
    };

    render(
      <BrowserRouter>
        <AuthProvider>
          <FamilyMember member={sampleUser} />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders member details correctly", () => {
    const isNameText = (content, element) => {
      const expectedText = `Name: ${sampleUser.first_name} ${sampleUser.last_name}`;
      return element.textContent.includes(expectedText);
    };

    const matchingElements = screen.queryAllByText(isNameText);

    expect(matchingElements.length).toBeGreaterThan(0);

    expect(matchingElements[0]).toBeInTheDocument();
  });
  

//   it("renders hereditary conditions when available", () => {
//     expect(screen.getByText("Hereditary conditions:")).toBeInTheDocument();
//     expect(screen.getByText("Condition1")).toBeInTheDocument();
//     expect(screen.getByText("Condition2")).toBeInTheDocument();
//   });

  it("renders a message when no hereditary conditions are available", () => {
    // Modify the user object to have an empty hereditary_conditions array
    sampleUser.hereditary_conditions = [];

    render(
      <BrowserRouter>
        <AuthProvider>
          <FamilyMember member={sampleUser} />
        </AuthProvider>
      </BrowserRouter>
    );

    // Check if the "No hereditary conditions available" message is rendered
    expect(screen.getByText('No hereditary conditions available.')).toBeInTheDocument();
  });
});