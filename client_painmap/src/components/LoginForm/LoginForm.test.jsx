import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import LoginForm from ".";

describe("LoginForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the email state correctly", () => {
        const userEmail = screen.getByRole("email");
        
        expect(userEmail.value).toBe("");

        fireEvent.change(userEmail, { target: { value: "test@example.com" } });

        expect(userEmail.value).toBe("test@example.com");
    });

    it("updates the password state correctly", () => {
        const userPassword = screen.getByRole("password");
        
        expect(userPassword.value).toBe("");

        fireEvent.change(userPassword, { target: { value: "test-password" } });

        expect(userPassword.value).toBe("test-password");
    });

    it("displays a form to input email and password", () => {
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    });

})
