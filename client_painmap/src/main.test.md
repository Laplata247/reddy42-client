import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { BrowserRouter as Router } from 'react-router-dom'
import { ConsultationsProvider } from './contexts'
import { GenderProvider } from './contexts'
import "vitest-canvas-mock";

import App from './main';

describe('App Component', () => {
    let container;
  
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      document.body.removeChild(container);
    });
  
    it('renders without crashing', () => {
      render(<App />, container);
      expect(container).toBeDefined();
    });

})

// You can add more tests as needed, for example, to ensure the providers are working correctly.
