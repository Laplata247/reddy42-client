import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapPainPage from '.';
import "jest-canvas-mock";

describe("MapPainPage component", () => {

    beforeEach(() => {
        jest.resetAllMocks();
        setupJestCanvasMock()
        render(
            <BrowserRouter>
                <MapPainPage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('contains the correct number of children', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Map Pain Page");
    });

    it('displays the heading with appropriate text', () => {
        const heading = screen.getByRole("heading");
        expect(heading.childNodes.length).toBe(9);
    });
})

