const AUTO_ADVANCE_INTERVAL_MS = 8000;

const carousel = document.getElementById("testimonial-carousel") as HTMLElement | null;
const track = document.getElementById("testimonial-track") as HTMLElement | null;
const prevButton = document.getElementById("testimonial-prev");
const nextButton = document.getElementById("testimonial-next");
const dotsContainer = document.getElementById("testimonial-dots") as HTMLElement | null;

if (
  carousel &&
  track &&
  prevButton &&
  nextButton &&
  dotsContainer &&
  carousel.dataset.initialized !== "true"
) {
  carousel.dataset.initialized = "true";

  const slides = Array.from(track.querySelectorAll("li"));
  const dots = Array.from(dotsContainer.querySelectorAll("button"));
  const total = slides.length;
  let current = 0;
  let timerId: number | undefined;

  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("w-6", index === current);
      dot.classList.toggle("bg-accent-1", index === current);
      dot.classList.toggle("w-2", index !== current);
      dot.classList.toggle("bg-content/20", index !== current);
    });
  };

  const goTo = (index: number) => {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  };

  const stopAutoAdvance = () => {
    if (timerId !== undefined) {
      window.clearInterval(timerId);
      timerId = undefined;
    }
  };

  const startAutoAdvance = () => {
    stopAutoAdvance();
    timerId = window.setInterval(
      () => goTo(current + 1),
      AUTO_ADVANCE_INTERVAL_MS,
    );
  };

  prevButton.addEventListener("click", () => goTo(current - 1));
  nextButton.addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goTo(index));
  });

  carousel.addEventListener("mouseenter", stopAutoAdvance);
  carousel.addEventListener("mouseleave", startAutoAdvance);

  updateDots();
  startAutoAdvance();
}
