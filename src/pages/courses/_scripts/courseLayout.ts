const initCourseDetailsToggle = () => {
  const preview = document.getElementById("course-details-preview") as HTMLElement | null;
  const expanded = document.getElementById("course-details-expanded") as HTMLElement | null;
  const button = document.getElementById("course-details-toggle") as HTMLElement | null;

  if (!preview || !expanded || !button || button.dataset.initialized === "true") {
    return;
  }

  button.dataset.initialized = "true";

  const labelMore = button.querySelector("[data-label-more]") as HTMLElement | null;
  const labelClose = button.querySelector("[data-label-close]") as HTMLElement | null;
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

const initParallaxBackgrounds = () => {
  const images = document.querySelectorAll<HTMLImageElement>(".parallax-bg");
  if (!images.length || document.body.dataset.courseParallaxInitialized === "true") {
    return;
  }

  document.body.dataset.courseParallaxInitialized = "true";

  let ticking = false;

  const update = () => {
    for (const image of images) {
      const section = image.parentElement;
      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      image.style.transform = `translateY(${(clamped - 0.5) * 30}%)`;
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );

  update();
};

initCourseDetailsToggle();
initParallaxBackgrounds();
