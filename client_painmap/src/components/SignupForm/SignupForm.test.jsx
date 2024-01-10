import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SignupForm from ".";

describe("SignupForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignupForm />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the firstName state correctly", () => {
        const userEmail = screen.getByRole("first-name");
        
        expect(userEmail.value).toBe("");

        fireEvent.change(userEmail, { target: { value: "John" } });

        expect(userEmail.value).toBe("John");
    });

    it("updates the lastName state correctly", () => {
        const userFirstName = screen.getByRole("last-name");
        
        expect(userFirstName.value).toBe("");

        fireEvent.change(userFirstName, { target: { value: "Doe" } });

        expect(userFirstName.value).toBe("Doe");
    });

    // it("updates the dateOfBirth state correctly", () => {
    //     const userDOB = screen.getByRole("dateOfBirth");
        
    //     expect(userDOB.value).toBe("");

    //     fireEvent.change(userDOB, { target: { value: "01/10/2024" } });

    //     expect(userDOB.value).toBe("01/10/2024");
    // });

    it("updates the email state correctly", () => {
        const userLastName = screen.getByRole("email");
        
        expect(userLastName.value).toBe("");

        fireEvent.change(userLastName, { target: { value: "test@example.com" } });

        expect(userLastName.value).toBe("test@example.com");
    });

    it("updates the password state correctly", () => {
        const userPassword = screen.getByRole("password");
        
        expect(userPassword.value).toBe("");

        fireEvent.change(userPassword, { target: { value: "test-password" } });

        expect(userPassword.value).toBe("test-password");
    });

    it("displays a form to input user's information", () => {
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    });

})
