// Optional: print the path that was asked for. Without JS the placeholder stays.
(function () {
  var el = document.getElementById("asked");
  if (!el) return;
  var path = location.pathname;
  try { path = decodeURIComponent(path); } catch (e) {}
  path = "." + path;
  if (path.length > 80) path = path.slice(0, 79) + "…";
  el.textContent = path;
})();
