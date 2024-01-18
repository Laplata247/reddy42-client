import React from "react";
import 'jest-canvas-mock'
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import DoctorSearch from ".";
import { GenderProvider } from "../../contexts";

describe("Sex selection page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
            <DoctorSearch />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

});
