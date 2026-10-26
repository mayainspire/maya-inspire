// Maya Inspire — JavaScript
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Menu cufi" : "Menu bani");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menu bani");
    });
  });
}
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#visitorName").value.trim();
    const message = document.querySelector("#visitorMessage").value.trim();
    if (!name || !message) {
      formMessage.textContent = "Maaloo maqaa fi ergaa guuti.";
      return;
    }
    formMessage.textContent = "Galatoomi, " + name + "! Unkaan kun amma ergaa hin ergitu; ergaa kee karaa email ykn social media ergi.";
  });
}
