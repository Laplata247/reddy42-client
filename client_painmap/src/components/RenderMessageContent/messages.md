import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import RenderMessageContent from './index';

describe('RenderMessageContent Component', () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  // Test 1: It exists
  it('should render RenderMessageContent component', () => {
    render(
      <BrowserRouter>
        <RenderMessageContent messageContent={{ author: 'User', content: 'Hello', time: '12:34' }} />
      </BrowserRouter>
    );

    const messageContentElement = screen.getByText(/Hello/i);
    expect(messageContentElement).toBeInTheDocument();
  });

  // Test 2: Happy path
  it('should render user message correctly', () => {
    const messageContent = {
      author: 'User',
      content: 'Hello',
      time: '12:34',
    };

    render(
      <BrowserRouter>
        <RenderMessageContent messageContent={messageContent} />
      </BrowserRouter>
    );

    const contentElement = screen.getByText(/Hello/i);
    const timeElement = screen.getByText(/12:34/i);
    const authorElement = screen.getByText(/User/i);

    expect(contentElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });

  // Test 3: Edge case - System message
  it('should render system message correctly', () => {
    const systemMessage = {
      author: 'System',
      content: 'This is a system message',
    };

    render(
      <BrowserRouter>
        <RenderMessageContent messageContent={systemMessage} />
      </BrowserRouter>
    );

    const systemMessageElement = screen.getByText(/This is a system message/i);

    expect(systemMessageElement).toBeInTheDocument();
  });
});

