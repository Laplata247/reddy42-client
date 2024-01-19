import React from "react";

import { describe, it, expect, beforeEach, afterEach } from "vitest";

import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import "vitest-canvas-mock";


import Signup from ".";

describe('Signup Page', () => { 
    beforeEach(() => {
        render (
            <BrowserRouter>
                <Signup />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("message-heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Visualize Your Health, Simplify Your Care.");
    });

});
