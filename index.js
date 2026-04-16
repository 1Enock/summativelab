const firstcard = document.getElementById("firstcard");
const secondcard = document.getElementById("secondcard");
const thirdcard = document.getElementById("thirdcard");

if (firstcard) firstcard.onclick = function() { window.location.href = "render.html"; };
if (secondcard) secondcard.onclick = function() { window.location.href = "gamedev.html"; };
if (thirdcard) thirdcard.onclick = function() { window.location.href = "webdev.html"; };
