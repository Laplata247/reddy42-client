import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import PainForm from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("PainForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <PainForm />
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the condition field correctly", () => {
        const condition = screen.getByRole("condition");
        expect(condition.value).toBe("");
        fireEvent.change(condition, { target: { value: "headache" } });
        expect(condition.value).toBe("headache");
    });

    it("updates the description field correctly", () => {
        const description = screen.getByRole("description");
        expect(description.value).toBe("");
        fireEvent.change(description, { target: { value: "Ouch it hurts" } });
        expect(description.value).toBe("Ouch it hurts");
    });

    it.skip("updates the date field correctly", () => {
        const date = screen.getByRole("date");
        fireEvent.change(date, { target: { value: "2023/4/5" } });
        expect(date.value).toBe("2023/4/5");
    });

})
