/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import { wireCardNavigation } from "./index.js";

describe("Card click navigation", () => {
  let navigateMock;

  beforeEach(() => {
    document.body.innerHTML = `
      <article id="firstcard"></article>
      <article id="secondcard"></article>
      <article id="thirdcard"></article>
    `;
    navigateMock = jest.fn();
    wireCardNavigation(document, navigateMock);
  });

  it("firstcard click navigates to render.html", () => {
    document.getElementById("firstcard").click();
    expect(navigateMock).toHaveBeenCalledWith("render.html");
  });

  it("secondcard click navigates to gamedev.html", () => {
    document.getElementById("secondcard").click();
    expect(navigateMock).toHaveBeenCalledWith("gamedev.html");
  });

  it("thirdcard click navigates to webdev.html", () => {
    document.getElementById("thirdcard").click();
    expect(navigateMock).toHaveBeenCalledWith("webdev.html");
  });
});

describe("Card element existence", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <article id="firstcard"></article>
      <article id="secondcard"></article>
      <article id="thirdcard"></article>
    `;
  });

  it("firstcard exists in the DOM", () => {
    expect(document.getElementById("firstcard")).not.toBeNull();
  });

  it("secondcard exists in the DOM", () => {
    expect(document.getElementById("secondcard")).not.toBeNull();
  });

  it("thirdcard exists in the DOM", () => {
    expect(document.getElementById("thirdcard")).not.toBeNull();
  });
});