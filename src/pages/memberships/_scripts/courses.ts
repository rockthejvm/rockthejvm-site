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

let openCatId: string | null = null;

function toggleCategory(catId: string) {
  const wasOpen = openCatId === catId;

  if (openCatId) {
    const prevBtn = document.querySelector<HTMLButtonElement>(`.cat-card[data-cat-id="${openCatId}"]`);
    const prevPanel = document.getElementById(`cat-panel-${openCatId}`);
    prevBtn?.setAttribute("aria-expanded", "false");
    prevPanel?.classList.remove("is-open");
    setTimeout(() => {
      if (!prevPanel?.classList.contains("is-open")) {
        prevPanel?.classList.add("hidden");
      }
    }, 400);
  }

  if (!wasOpen) {
    const btn = document.querySelector<HTMLButtonElement>(`.cat-card[data-cat-id="${catId}"]`);
    const panel = document.getElementById(`cat-panel-${catId}`);
    btn?.setAttribute("aria-expanded", "true");
    panel?.classList.remove("hidden");
    panel?.offsetHeight;
    panel?.classList.add("is-open");
    openCatId = catId;

    setTimeout(() => {
      panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  } else {
    openCatId = null;
  }
}

document.querySelectorAll<HTMLButtonElement>(".cat-card[data-cat-id]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const catId = btn.dataset.catId!;
    toggleCategory(catId);
  });
});

document.querySelectorAll<HTMLButtonElement>(".cat-close[data-cat-id]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const catId = btn.dataset.catId!;
    toggleCategory(catId);
  });
});
