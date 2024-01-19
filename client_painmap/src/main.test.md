import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AuthProvider } from "./contexts/AuthContext";
import { MemoryRouter } from 'react-router-dom'
import { ConsultationsProvider } from './contexts'
import { GenderProvider } from './contexts'
import "vitest-canvas-mock";

import App from './main';

describe("Index file", () => {
  test("renders App component and providers", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <GenderProvider>
            <ConsultationsProvider>
              <App />
            </ConsultationsProvider>
          </GenderProvider>
        </AuthProvider>
      </MemoryRouter>
    );

    // Add your assertions here based on your App component and provider rendering
    // Example:
    const appElement = document.getElementById("root"); // Assuming root is the ID of the root element
    expect(appElement).not.toBeNull();
    expect(appElement.textContent).toContain("Your App component content");
  });
});