import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import Signup from '.';

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
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Sign up");
    });

});
