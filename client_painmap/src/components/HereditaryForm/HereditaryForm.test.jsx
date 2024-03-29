import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import HereditaryForm from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("HereditaryForm component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <HereditaryForm />
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("updates the hereditary condition field correctly", () => {
        const condition = screen.getByRole("hereditaryCondition");
        expect(condition.value).toBe("");
        fireEvent.change(condition, { target: { value: "Albinism" } });
        expect(condition.value).toBe("Albinism");
    });
})
