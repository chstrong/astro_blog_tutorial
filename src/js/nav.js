const navLinks = document.querySelectorAll("[data-navLink]");

console.log("in the nav")
navLinks.forEach((link) => {
  if(link.getAttribute("href" === window.location.pathname)) {
    link.setAttribute("aria-current", "page");
  }
})