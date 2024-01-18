import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ChatPage from './index';
import axios from 'axios';
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

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

  it('renders loading state and fetches user data', async () => {
    const userData = {
      first_name: 'TestUser',
      id: 'TestRoom',
      nhs_number: 'False',
    };
  
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { data: userData } });
  
    render(
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>,
      container
    );
  
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  
    expect(screen.getByPlaceholderText('Room ID...')).toBeInTheDocument();
    expect(screen.getByText('Join A Room')).toBeInTheDocument();
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

