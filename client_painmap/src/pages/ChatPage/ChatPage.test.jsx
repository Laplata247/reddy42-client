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
// const mockAxios = vi.mock(axios);


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
  
    // Wait for the loading state to be removed
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  
    // Ensure input and button are rendered
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

// import React from 'react';
// import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
// import { render, cleanup, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';
// import ChatPage from './index';
// import axios from 'axios';
// import * as matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);


// describe('ChatPage Component', () => {
//   beforeEach(() => {
//     // Clear any previous mocks and setup
//     cleanup()
//   });

//   it('renders loading state and fetches user data', async () => {
//     const userData = {
//       first_name: 'TestUser',
//       id: 'TestRoom',
//       nhs_number: 'False',
//     };
  
//     vi.spyOn(axios, 'get').mockResolvedValue({ data: { data: userData } });
  
//     render(<ChatPage />);
  
//     // Wait for the loading state to be removed
//     await waitFor(() => {
//       expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
//     });
  
//     // Ensure input and button are rendered
//     expect(screen.getByPlaceholderText('Room ID...')).toBeInTheDocument();
//     expect(screen.getByText('Join A Room')).toBeInTheDocument();
//   });

//   it.skip('renders Chat component after joining room', async () => {
//     const userData = {
//       first_name: 'TestUser',
//       id: 'TestRoom',
//       nhs_number: 'False',
//     };
  
//     vi.spyOn(axios, 'get').mockResolvedValue({ data: { data: userData } });
  
//     render(<ChatPage />);
  
//     // Ensure loading state is removed
//     await waitFor(() => {
//       expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
//     });
  
//     // Ensure Chat component is rendered
//     await waitFor(() => {
//       const liveChatElement = screen.queryByText('Live Chat');
//       expect(liveChatElement).toBeInTheDocument();
//     });
//   });
  
  
  

//   it.skip('handles joining a room when user is staff', async () => {
//     const userData = {
//       first_name: 'TestUser',
//       nhs_number: 'True',
//     };
  
//     vi.spyOn(axios, 'get').mockResolvedValue({ data: { data: userData } });
  
//     render(<ChatPage />);
  
//     // Wait for user data to be fetched
//     await waitFor(() => {
//       expect(axios.get).toHaveBeenCalled();
//     });
  
//     // Ensure "Join A Chat" container is rendered
//     expect(screen.getByText('Join A Chat')).toBeInTheDocument();
  
//     // Mock input and button interaction
//     const roomInput = screen.getByPlaceholderText('Room ID...');
//     const joinButton = screen.getByText('Join A Room');
  
//     userEvent.type(roomInput, 'TestRoom');
//     userEvent.click(joinButton);
  
//     // Ensure Chat component is rendered after joining room
//     expect(screen.getByText('Live Chat')).toBeInTheDocument();
//   });
  
// });
