const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const interactiveCards = document.querySelectorAll(".interactive-card, .interactive-surface");
const themeToggle = document.querySelector(".theme-toggle");
const timelineCard = document.querySelector(".timeline-card");
const timelineToggle = document.querySelector(".timeline-toggle");
const contactForm = document.querySelector(".contact-form");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (themeToggle) {
  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    const isShifted = document.body.classList.toggle("theme-shift");
    themeToggle.setAttribute("aria-pressed", String(isShifted));

    if (icon) {
      icon.className = isShifted ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  });
}

if (timelineToggle && timelineCard) {
  timelineToggle.addEventListener("click", () => {
    const isCollapsed = timelineCard.classList.toggle("is-collapsed");
    timelineToggle.setAttribute("aria-expanded", String(!isCollapsed));
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

const canTilt = window.matchMedia("(pointer: fine)").matches;

if (canTilt) {
  interactiveCards.forEach((card) => {
    const resetCard = () => {
      card.style.transform = "";
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
      card.classList.remove("is-hovered");
    };

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 7;
      const rotateX = (0.5 - (y / rect.height)) * 7;

      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      card.classList.add("is-hovered");
    });

    card.addEventListener("mouseleave", resetCard);
    card.addEventListener("blur", resetCard, true);
  });
}

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    navLinks.forEach((link) => {
      if (scrollPosition >= top && scrollPosition < bottom) {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      }
    });
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button");
    const label = button?.querySelector("span");

    if (!button || !label) {
      return;
    }

    const previousText = label.textContent;
    label.textContent = "Message Sent";

    window.setTimeout(() => {
      label.textContent = previousText;
    }, 1800);
  });
}
