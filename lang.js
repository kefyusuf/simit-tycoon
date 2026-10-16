// Page language: the visitor's choice, else Turkish for Turkish browsers, else English.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("simit-tycoon/site-lang"); } catch (e) {}
  var lang = saved === "tr" || saved === "en" ? saved : /^tr\b/i.test(navigator.language || "") ? "tr" : "en";
  function set(next) {
    lang = next;
    root.dataset.lang = next;
    root.lang = next;
    document.querySelectorAll(".langs button").forEach(function (b) { b.classList.toggle("on", b.dataset.set === next); });
  }
  set(lang);
  document.addEventListener("DOMContentLoaded", function () {
    set(lang);
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.addEventListener("click", function () {
        set(b.dataset.set);
        try { localStorage.setItem("simit-tycoon/site-lang", b.dataset.set); } catch (e) {}
      });
    });
  });
})();
