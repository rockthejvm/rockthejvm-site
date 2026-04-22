import { initParallaxBackgrounds } from "@/utils/parallax";

const initCourseDetailsToggle = () => {
  const preview = document.getElementById(
    "course-details-preview",
  ) as HTMLElement | null;
  const expanded = document.getElementById(
    "course-details-expanded",
  ) as HTMLElement | null;
  const button = document.getElementById(
    "course-details-toggle",
  ) as HTMLElement | null;

  if (
    !preview ||
    !expanded ||
    !button ||
    button.dataset.initialized === "true"
  ) {
    return;
  }

  button.dataset.initialized = "true";

  const labelMore = button.querySelector(
    "[data-label-more]",
  ) as HTMLElement | null;
  const labelClose = button.querySelector(
    "[data-label-close]",
  ) as HTMLElement | null;
  const chevron = button.querySelector("svg") as SVGElement | null;
  const gradient = preview.querySelector<HTMLElement>(".bg-gradient-to-t");
  let isOpen = false;

  const open = () => {
    isOpen = true;
    preview.style.maxHeight = "none";
    gradient?.classList.add("hidden");
    expanded.classList.remove("hidden");
    labelMore?.classList.add("hidden");
    labelClose?.classList.remove("hidden");
    if (chevron) {
      chevron.style.transform = "rotate(180deg)";
    }
  };

  const close = () => {
    isOpen = false;
    preview.style.maxHeight = "";
    gradient?.classList.remove("hidden");
    expanded.classList.add("hidden");
    labelMore?.classList.remove("hidden");
    labelClose?.classList.add("hidden");
    if (chevron) {
      chevron.style.transform = "";
    }
  };

  button.addEventListener("click", () => {
    if (isOpen) {
      close();
      return;
    }

    open();
  });

  if (window.location.hash === "#course-details") {
    open();
  }

  document.querySelectorAll('a[href="#course-details"]').forEach((link) => {
    link.addEventListener("click", open);
  });
};

initCourseDetailsToggle();
initParallaxBackgrounds();
