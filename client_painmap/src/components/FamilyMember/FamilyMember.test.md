import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FamilyMember from ".";
import {AuthProvider} from '../../contexts/AuthContext'

describe("FamilyMember component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <FamilyMember />
                </AuthProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });




})
