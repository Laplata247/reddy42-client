import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
// import { useVite } from 'vite-plu'
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Chat from ".";

describe('Chat Component', () => {
  let socket = {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  };

  let mockSocket;

  beforeEach(() => {
    // Mock socket
    mockSocket = {
      emit: vi.fn(),
      on: vi.fn(),
      off: vi.fn(),

    };

  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Chat component', () => {
    render(
      <BrowserRouter>
        <Chat socket={mockSocket} username="TestUser" room="TestRoom" />
      </BrowserRouter>,
    );
    const chatWindow = screen.getByText('Live Chat');
    expect(chatWindow).toBeInTheDocument();
  });

  it("renders the chat header and footer", () => {
        render(
          <MemoryRouter initialEntries={["/chat"]}>
            <Chat socket={socket} username="Alice" room="general" />
          </MemoryRouter>
        );
    
        expect(screen.getByText("Live Chat")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("button", { class: "send-btn" })).toBeInTheDocument();
  });

  it('sends a message when the button is clicked', async () => {
    render(<Chat socket={mockSocket} username="TestUser" room="TestRoom" />);
    
    // Mock user input
    const inputList = screen.getAllByPlaceholderText('Hey...');
    const sendButtonList = screen.getAllByText('►');
    const input = inputList[0];
    const sendButton = sendButtonList[0];
    input.value = 'Hello';
  
    // Trigger the click event
    fireEvent.click(sendButton);
  
    // Additional logging for debugging
    console.log('mockSocket.emit calls:', mockSocket.emit.mock.calls);
  
    // Assertions
    // Check if socket.emit is called with the expected parameters
    expect(mockSocket.emit).toHaveBeenCalledWith('send_message', {
      room: 'TestRoom',
      author: 'TestUser',
      content: 'Hello',
      time: expect.any(String),
    });
  
    // Check if the input value is cleared after sending the message
    expect(input.value).toBe('');
  });
  

  it.skip('fetches previous messages on mount', async () => {
    // Ensure socket.on is called for receive_message and user_joined events
    expect(mockSocket.on).toHaveBeenCalledWith('receive_message', expect.any(Function));
    expect(mockSocket.on).toHaveBeenCalledWith('user_joined', expect.any(Function));

    // Ensure fetch is called with the correct URL
    expect(globalThis.fetch).toHaveBeenCalledWith('http://localhost:5000/messages/TestRoom');
  });
});
