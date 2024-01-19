// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { screen, render, cleanup} from '@testing-library/react';
// import '@testing-library/jest-dom'
// import "vitest-canvas-mock";
// import * as matchers from '@testing-library/jest-dom/matchers';
// import { describe, it, beforeEach, afterEach } from 'vitest';
// import { expect as vtExpect } from 'vitest';
// global.expect = vtExpect;

// expect.extend(matchers);

// import Signup from '.';

// describe('Signup Page', () => {
//     beforeEach(() => {
//         render (
//             <BrowserRouter>
//                 <Signup />
//             </BrowserRouter>
//         );
//     });

//     afterEach(() => {
//         cleanup();
//     });

//     it('displays a heading with appropriate text', () => {
//         const heading = screen.getByRole("heading");
//         expect(heading).toBeInTheDocument();
//         expect(heading.textContent).toBe("Sign up");
//     });

// });
