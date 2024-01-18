import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SearchForm from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("SearchForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <SearchForm />
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the input field correctly", () => {
        const input = screen.getByRole("input");
        expect(input.value).toBe("");
        fireEvent.change(input, { target: { value: "email@gmail.com" } });
        expect(input.value).toBe("email@gmail.com");
    });

})
