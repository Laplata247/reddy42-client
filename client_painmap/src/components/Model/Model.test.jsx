import ReactThreeTestRenderer from '@react-three/test-renderer'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import {Model} from '.'

test('mesh is rendered', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Model />)
    expect(renderer).toBeInTheDocument()
  })

  test('mesh has children', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Model />)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2)
  })