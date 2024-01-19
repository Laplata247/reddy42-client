import React from "react";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Consultation from ".";

describe("Consultation component", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
            <Consultation
              consultation={{
                condition_name: "Test Condition",
                image_data_base64: "base64_encoded_image_data", 
                start_date: new Date("2022-01-19T12:00:00Z"),
              }}
            />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    test("renders condition name", () => {
      const conditionNameElement = screen.getByText("Test Condition");
      expect(conditionNameElement).toBeInTheDocument();
    });
  
    test("renders image with correct attributes", () => {
      const imageElement = screen.getByRole("img");
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", "data:image/jpeg;base64,base64_encoded_image_data");
      expect(imageElement).toHaveAttribute("width", "200");
      expect(imageElement).toHaveAttribute("height", "200");
    });
  
    test("renders start date", () => {
        const startDateElement = screen.getByText("Wed Jan 19 2022");
        expect(startDateElement).toBeInTheDocument();
      });
  });