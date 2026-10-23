// Profile photo: the repository screenshot shows yukesh-photo.jpeg in the root.
// If the photo is instead stored inside /assets, try that location automatically.
const profilePhoto = document.querySelector(".profile-photo");
if (profilePhoto) {
  profilePhoto.addEventListener("error", () => {
    if (profilePhoto.dataset.triedAssets === "true") return;
    profilePhoto.dataset.triedAssets = "true";
    profilePhoto.src = "./assets/yukesh-photo.jpeg";
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim() || `Portfolio message from ${name}`;
    const message = String(data.get("message") || "").trim();

    const body = [
      `Hi Yukesh,`,
      ``,
      message,
      ``,
      `— ${name}`,
      `Reply to: ${email}`
    ].join("\n");

    const mailto = `mailto:yukeshyuva20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (formNote) {
      formNote.textContent = "Opening your email app. If nothing opens, email yukeshyuva20@gmail.com directly.";
    }
    window.location.href = mailto;
  });
}
