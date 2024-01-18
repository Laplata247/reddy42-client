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






// import React from "react";
// import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
// import { screen, render, cleanup, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import * as matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);
// import Chat from "./index";
// import RenderMessageContent from "../RenderMessageContent/index"; // Assuming this is the correct path

// vi.mock("react-scroll-to-bottom"); // Mock external library

// describe("Chat component", () => {
//   let socket = {
//     on: vi.fn(),
//     off: vi.fn(),
//     emit: vi.fn(),
//   };

//   vi.mock("node-fetch", () => ({
//     fetch: vi.fn(),
//   }));

//   beforeEach(() => {
//     socket.on.mockClear();
//     socket.off.mockClear();
//     socket.emit.mockClear();
//   });

//   afterEach(cleanup);

//   it("renders the chat header and footer", () => {
//     render(
//       <MemoryRouter initialEntries={["/chat"]}>
//         <Chat socket={socket} username="Alice" room="general" />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Live Chat")).toBeInTheDocument();
//     expect(screen.getByRole("textbox")).toBeInTheDocument();
//     expect(screen.getByRole("button", { class: "send-btn" })).toBeInTheDocument();
//   });

//   it("fetches previous messages on mount", async () => {
//     render(
//       <MemoryRouter initialEntries={["/chat"]}>
//         <Chat socket={socket} username="Alice" room="general" />
//       </MemoryRouter>
//     );

//     expect(vi.fn(fetch)).toHaveBeenCalledTimes(1); // Use vi.fn(fetch) here
//     expect(vi.fn(fetch)).toHaveBeenCalledWith("http://localhost:5000/messages/general");
//   });

//   it("renders a list of messages", async () => {
//     const mockMessages = [
//       { author: "Bob", content: "Hello!", time: "12:34" },
//       { author: "Alice", content: "Hi there!", time: "12:35" },
//     ];
//     fetch.mockResponseOnce(JSON.stringify({ data: mockMessages }));

//     render(
//       <MemoryRouter initialEntries={["/chat"]}>
//         <Chat socket={socket} username="Alice" room="general" />
//       </MemoryRouter>
//     );

//     await waitFor(() => {
//       expect(screen.getAllByRole("listitem")).toHaveLength(2);
//       expect(screen.getByText("Bob: Hello!")).toBeInTheDocument();
//       expect(screen.getByText("Alice: Hi there!")).toBeInTheDocument();
//     });
//   });

//   it("sends a message when the send button is clicked", async () => {
//     render(
//       <MemoryRouter initialEntries={["/chat"]}>
//         <Chat socket={socket} username="Alice" room="general" />
//       </MemoryRouter>
//     );

//     const input = screen.getByRole("textbox");
//     const button = screen.getByRole("button", { name: /send/i });

//     fireEvent.change(input, { target: { value: "Hello everyone!" } });
//     fireEvent.click(button);

//     expect(socket.emit).toHaveBeenCalledTimes(1);
//     expect(socket.emit).toHaveBeenCalledWith("send_message", {
//       room: "general",
//       author: "Alice",
//       content: "Hello everyone!",
//       time: expect.any(String), // Exact time will vary
//     });
//   });

// })
