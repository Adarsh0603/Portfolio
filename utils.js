// "Back to top" button (vanilla JS — jQuery is no longer needed)
const btn = document.getElementById("btnscroll");

if (btn) {
  window.addEventListener(
    "scroll",
    () => {
      btn.style.display = window.scrollY > 100 ? "block" : "none";
    },
    { passive: true }
  );

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
