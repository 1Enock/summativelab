import { describe, it, expect, beforeEach } from "vitest";

// Build a minimal DOM that matches index.html's card structure
function setupDOM() {
    const dom = new JSDOM(`<!DOCTYPE html>
<html>
<body>
  <article id="firstcard"></article>
  <article id="secondcard"></article>
  <article id="thirdcard"></article>
</body>
</html>`);

    // Expose globals the script expects
    global.document = dom.window.document;
    global.window = dom.window;
    return dom;
}

// Dynamically re-import the script so each test gets a fresh run
async function loadScript() {
    // Bust module cache with a unique query so each test re-registers listeners
    const url = `../index.js?t=${Date.now()}`;
    await import(url);
}

describe("Card click navigation", () => {
    beforeEach(() => {
        setupDOM();
        // Replace location.href with a writable mock
        Object.defineProperty(global.window, "location", {
            value: { href: "" },
            writable: true,
            configurable: true,
        });
    });

    it("firstcard click navigates to render.html", async () => {
        await loadScript();
        document.getElementById("firstcard").click();
        expect(window.location.href).toBe("render.html");
    });

    it("secondcard click navigates to gamedev.html", async () => {
        await loadScript();
        document.getElementById("secondcard").click();
        expect(window.location.href).toBe("gamedev.html");
    });

    it("thirdcard click navigates to webdev.html", async () => {
        await loadScript();
        document.getElementById("thirdcard").click();
        expect(window.location.href).toBe("webdev.html");
    });
});

describe("Card element existence", () => {
    beforeEach(() => {
        setupDOM();
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
