import "./style.css";

const headings = document.querySelectorAll("article");
const navbar = document.getElementById("navbar")!;
const mainContent = document.getElementById("main-content")!;

if (!window.matchMedia("(pointer: coarse)").matches) {
  document.body.classList.add("hasHover");
}

const options = {
  root: mainContent,
  rootMargin: "0px",
  threshold: 0.5,
};
if (window.innerWidth < 992) {
  options.threshold = 0.3;
} else if (window.innerWidth < 1200) {
  options.threshold = 0.4;
}

const callback = (entries: any[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const headingId = entry.target.id;
      const navLink = document.querySelector(`[href="#${headingId}"]`)!;
      const navUrl = `/#${headingId}`;

      navbar.querySelector(".active")?.classList.remove("active");
      navLink.classList.add("active");
      window.history.replaceState(null, "", navUrl);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

headings.forEach((heading) => {
  observer.observe(heading);
});
