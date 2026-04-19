const firstcard = document.getElementById("firstcard");
const secondcard = document.getElementById("secondcard");
const thirdcard = document.getElementById("thirdcard");

if (firstcard) firstcard.onclick = function() { window.location.href = "render.html"; };
if (secondcard) secondcard.onclick = function() { window.location.href = "gamedev.html"; };
if (thirdcard) thirdcard.onclick = function() { window.location.href = "webdev.html"; };

export function wireCardNavigation(
  doc = document,
  navigate = (url) => {
    window.location.href = url;
  }
) {
  const routes = [
    ["firstcard", "render.html"],
    ["secondcard", "gamedev.html"],
    ["thirdcard", "webdev.html"],
  ];

  for (const [id, path] of routes) {
    const el = doc.getElementById(id);
    if (!el) continue;
    el.addEventListener("click", () => navigate(path));
  }
}

export function initCardNavigation() {
  wireCardNavigation();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCardNavigation);
  } else {
    initCardNavigation();
  }
}