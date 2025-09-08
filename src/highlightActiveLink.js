

export function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop(); // e.g., product.html
  const navLinks = document.querySelectorAll('.section-navbar .navbar a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop(); // e.g., product.html

    if (linkPath === currentPath || (currentPath === "" && link.getAttribute("href") === "/")) {
      link.classList.add("active");
    }
  });
}
