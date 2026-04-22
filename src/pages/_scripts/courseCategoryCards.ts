const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll<HTMLElement>(".cat-wrapper").forEach((el) => {
  observer.observe(el);
});

const MAX_TILT = 14;
document.querySelectorAll<HTMLAnchorElement>(".cat-card").forEach((card) => {
  const inner = card.querySelector<HTMLDivElement>(".cat-inner")!;
  card.addEventListener("mousemove", (e: MouseEvent) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.style.setProperty("--rx", `${(-y * MAX_TILT).toFixed(2)}deg`);
    inner.style.setProperty("--ry", `${(x * MAX_TILT).toFixed(2)}deg`);
  });
  card.addEventListener("mouseleave", () => {
    inner.style.setProperty("--rx", "0deg");
    inner.style.setProperty("--ry", "0deg");
  });
});
