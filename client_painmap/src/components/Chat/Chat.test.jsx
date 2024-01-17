import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import './index'
import Chat from './index';

// Example function to mock
let myFunction = () => 'Original Value';

// Save the original function to restore it later
let originalFunction;

describe('MyComponent', () => {
  beforeEach(() => {
    // Save the original function before each test
    originalFunction = myFunction;
  });

  afterEach(() => {
    // Restore the original function after each test
    myFunction = originalFunction;
  });

  it('renders with mocked function', () => {
    // Mocking the function to return a specific value
    myFunction = () => 'Mocked Value';

    render(<Chat myFunction={myFunction} />);

    // Your test assertions here
    expect(screen.getByText('Mocked Value')).toBeInTheDocument();
  });

  it('renders with another mocked function scenario', () => {
    // Mocking the function to return a different value
    myFunction = () => 'Another Mocked Value';

    render(<Chat myFunction={myFunction} />);

    // Your test assertions here
    expect(screen.getByText('Another Mocked Value')).toBeInTheDocument();
  });





//   it('sends a message when the button is clicked', async () => {
//     render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

//     await act(async () => {
//       await Promise.resolve();
//     });

//     // Change input value and click the button
//     screen.getByPlaceholderText('Hey...').value = 'Hello';
//     screen.getByText('▶').click();

//     // Expect that the socket emit function is called with the correct arguments
//     expect(mockSocket.emit).toHaveBeenCalledWith('send_message', {
//       room: 'TestRoom',
//       author: 'TestUser',
//       content: 'Hello',
//       time: expect.any(String),
//     });

//     // Expect that the input value is cleared
//     expect(screen.getByPlaceholderText('Hey...').value).toBe('');
//   });

//   it('fetches previous messages on mount', async () => {
//     render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

//     // Expect that fetch is called with the correct URL
//     expect(fetchMock.called('http://localhost:5000/messages/TestRoom')).toBe(true);
//   });

//   it('handles an empty message input on send', async () => {
//     render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);

//     await act(async () => {
//       await Promise.resolve();
//     });

//     // Click the button with an empty input
//     screen.getByText('▶').click();

//     // Expect that the socket emit function is not called
//     expect(mockSocket.emit).not.toHaveBeenCalled();
//   });
});

