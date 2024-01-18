import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { waitFor } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SignupForm from ".";

describe("SignupForm component", () => {

    const mock = new MockAdapter(axios);

    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignupForm />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
        mock.reset();
    });

    // it('submits the form and handles a successful signup', async () => {
    //     const mockResponse = { status: 201 }
    
    //     mock.onPost('http://localhost:5000/patients').reply(201, mockResponse);
    
    //     fireEvent.change(screen.getByRole('first-name'), { target: { value: 'John' } });
    //     fireEvent.change(screen.getByRole('last-name'), { target: { value: 'Doe' } });
    //     fireEvent.change(screen.getByRole('email'), { target: { value: 'john@email.com' } });
    //     fireEvent.change(screen.getByRole('password'), { target: { value: 'testPassword' } });
    //     fireEvent.change(screen.getByRole('dateOfBirth'), { target: { value: '2024/01/19' } });
    //     fireEvent.change(screen.getByRole('sex'), { target: { value: 'M' } });
    //     fireEvent.change(screen.getByRole('ethnicity'), { target: { value: 'White' } });
    
    //     fireEvent.submit(screen.getByRole('form'));
    
    //     await waitFor(() => {
    //         // Your assertions here
    
    //         expect(mock.history.post.length).toBe(1);
    
    //         const requestData = JSON.parse(mock.history.post[0].data);
    
    //         expect(requestData.first_name).toBe('John');
    //         expect(requestData.last_name).toBe('Doe');
    //         expect(requestData.email).toBe('john@email.com');
    //         expect(requestData.password).toBe('testPassword');
    //         // expect(requestData.nhs_number).toBe('No');
    //         expect(requestData.date_of_birth).toBe('2024/01/19');
    //         expect(requestData.sex).toBe('M');
    //         expect(requestData.ethnicity).toBe('White');
    
    //         expect(screen.getByText('Create Account')).toBeTruthy();
    //     });
    
    //     expect(screen.getByText('Create Account')).toBeTruthy();
    // });
    

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

    it("updates the dateOfBirth state correctly", () => {
        const userDOB = screen.getByRole("dateOfBirth");
        
        expect(userDOB.value).toBe("");

        fireEvent.change(userDOB, { target: { value: "2024-01-10" } });

        expect(userDOB.value).toBe("2024-01-10");
    });

    it("updates the sex state correctly", () => {
        const userSex = screen.getByRole("sex");
        
        expect(userSex.value).toBe("");

        fireEvent.change(userSex, { target: { value: "F" } });

        expect(userSex.value).toBe("F");
    });

    it("updates the ethnicity state correctly", () => {
        const userEthnicity = screen.getByRole("ethnicity");
        
        expect(userEthnicity.value).toBe("");

        fireEvent.change(userEthnicity, { target: { value: "Other" } });

        expect(userEthnicity.value).toBe("Other");
    });

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
