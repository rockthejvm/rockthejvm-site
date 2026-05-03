export const initParallaxBackgrounds = ({
  datasetKey = "courseParallaxInitialized",
}: {
  datasetKey?: string;
} = {}) => {
  const images = document.querySelectorAll<HTMLImageElement>(".parallax-bg");
  if (!images.length || document.body.dataset[datasetKey] === "true") {
    return;
  }

  document.body.dataset[datasetKey] = "true";

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
