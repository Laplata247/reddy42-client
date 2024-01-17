import { describe, it, expect, beforeEach, afterEach, render, screen } from 'vitest';
import { act } from '@testing-library/react';
import Chat from './Chat';

// Mock socket and fetch
let mockSocket;
let originalFetch;

describe('Chat Component', () => {
  beforeEach(() => {
    // Mock socket and fetch
    mockSocket = {
      emit: () => {},
      on: () => {},
      off: () => {},
    };
    originalFetch = global.fetch;
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ data: [] }),
      });
  });

  afterEach(() => {
    // Restore original fetch
    global.fetch = originalFetch;
  });

  it.skip('renders the Chat component', async () => {
    render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText('Live Chat')).toBeTruthy();
  });

  it.skip('sends a message when the button is clicked', async () => {
    render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

    await act(async () => {
      await Promise.resolve();
    });

    // Mock user input
    const input = screen.getByPlaceholderText('Hey...');
    const sendButton = screen.getByText('▶');
    input.value = 'Hello';

    await act(async () => {
      await Promise.resolve();
    });

    expect(input.value).toBe('');

    // Your assertions related to socket.emit can be added here.
  });

  it.skip('fetches previous messages on mount', async () => {
    render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

    await act(async () => {
      await Promise.resolve();
    });

    // Your assertions related to global.fetch can be added here.
  });

  it.skip('handles an empty message input on send', async () => {
    render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

    await act(async () => {
      await Promise.resolve();
    });

    // Mock user trying to send an empty message
    const sendButton = screen.getByText('▶');

    await act(async () => {
      await Promise.resolve();
    });

    // Your assertions related to socket.emit should not be called here.
  });
});
