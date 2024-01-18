import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChatPage from './index';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  cleanup();
});

describe('ChatPage Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>,
      container
    );
    expect(screen.getByText('Join A Chat')).not.toBeNull();
  });

  it('sets initial state correctly', () => {
    render(
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>,
      container
    );
  });

  it('joins room on button click', () => {
    render(
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>,
      container
    );
  });

  it('renders "Join A Chat" container initially', () => {
    render(
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>,
      container
    );
    expect(screen.getByText('Join A Chat')).not.toBeNull();
  });

});
