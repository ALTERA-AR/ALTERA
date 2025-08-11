document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
});
