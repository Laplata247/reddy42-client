import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import HereditaryCondition from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("Hereditary condition component", () => {

    beforeEach(() => {
        const condition={hereditary_condition_name:"slaying"}
        render(
            <BrowserRouter>
                <AuthProvider>
                    <HereditaryCondition condition={condition}/>
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("renders the div element with 1 child", () => {
        const div = screen.getByRole("div");
        expect(div).toBeInTheDocument()
        expect(div.children.length).toBe(1);
    });

    it("the correct hereditary condition is shown", () => {
        const header = screen.getByRole("title");
        expect(header.textContent).toBe("slaying");
    });


})
