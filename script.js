const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".site-nav a")];
const skipLink = document.querySelector(".skip-link");

const setActiveLink = () => {
  let current = sections[0];

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) {
      current = section;
    }
  });

  const activeId = current?.id || sections[0]?.id;

  links.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
};

setActiveLink();
document.addEventListener("scroll", setActiveLink, { passive: true });

skipLink?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  skipLink.blur();
});
