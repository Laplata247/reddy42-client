import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FamilyForm from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("FamilyForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <FamilyForm />
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the family email field correctly", () => {
        const condition = screen.getByRole("familyEmail");
        expect(condition.value).toBe("");
        fireEvent.change(condition, { target: { value: "email@gmail.com" } });
        expect(condition.value).toBe("email@gmail.com");
    });


})
