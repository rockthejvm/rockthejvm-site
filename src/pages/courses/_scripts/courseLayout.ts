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
    preview.classList.add("max-h-none");
    gradient?.classList.add("hidden");
    expanded.classList.remove("hidden");
    labelMore?.classList.add("hidden");
    labelClose?.classList.remove("hidden");
    chevron?.classList.add("rotate-180");
  };

  const close = () => {
    isOpen = false;
    preview.classList.remove("max-h-none");
    gradient?.classList.remove("hidden");
    expanded.classList.add("hidden");
    labelMore?.classList.remove("hidden");
    labelClose?.classList.add("hidden");
    chevron?.classList.remove("rotate-180");
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
