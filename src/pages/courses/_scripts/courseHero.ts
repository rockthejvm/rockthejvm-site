const VIDEO_ID_PATTERN = /^[\w-]+$/;

const toggleModalVisibility = (
  modal: HTMLElement,
  backdrop: HTMLElement,
  panel: HTMLElement,
  isVisible: boolean,
) => {
  modal.classList.toggle("hidden", !isVisible);
  backdrop.classList.toggle("opacity-100", isVisible);
  backdrop.classList.toggle("opacity-0", !isVisible);
  panel.classList.toggle("opacity-100", isVisible);
  panel.classList.toggle("opacity-0", !isVisible);
};

const createVideoFrame = (videoId: string): HTMLIFrameElement => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.title = "Course preview";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style.position = "absolute";
  iframe.style.inset = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";
  return iframe;
};

const initRoadmapModal = () => {
  const openButton = document.getElementById("open-roadmap-modal");
  const modal = document.getElementById("roadmap-modal") as HTMLElement | null;
  const backdrop = document.getElementById(
    "modal-roadmap-backdrop",
  ) as HTMLElement | null;
  const panel = document.getElementById(
    "modal-roadmap-panel",
  ) as HTMLElement | null;

  if (
    !openButton ||
    !modal ||
    !backdrop ||
    !panel ||
    modal.dataset.initialized === "true"
  ) {
    return;
  }

  modal.dataset.initialized = "true";

  const showModal = () => {
    modal.classList.remove("hidden");
    backdrop.classList.add("opacity-100");
    backdrop.classList.remove("opacity-0");
    panel.classList.add("opacity-100", "translate-y-0", "sm:scale-100");
    panel.classList.remove(
      "opacity-0",
      "translate-y-4",
      "sm:translate-y-0",
      "sm:scale-95",
    );
    const searchInput = document.querySelector(
      '#search input[type="text"]',
    ) as HTMLInputElement | null;
    searchInput?.focus();
  };

  const hideModal = () => {
    modal.classList.add("hidden");
    backdrop.classList.add("opacity-0");
    backdrop.classList.remove("opacity-100");
    panel.classList.add(
      "opacity-0",
      "translate-y-4",
      "sm:translate-y-0",
      "sm:scale-95",
    );
    panel.classList.remove("opacity-100", "translate-y-0", "sm:scale-100");
  };

  openButton.addEventListener("click", showModal);

  document.addEventListener("keydown", (event) => {
    const isMac = navigator.userAgent.toUpperCase().includes("MAC");
    const ctrlOrCmdKey = isMac ? event.metaKey : event.ctrlKey;

    if (ctrlOrCmdKey && event.key === "k") {
      event.preventDefault();
      showModal();
    }

    if (event.key === "Escape") {
      hideModal();
    }
  });

  modal.addEventListener("click", ({ target }) => {
    if (!panel.contains(target as Node | null)) {
      hideModal();
    }
  });
};

const initVideoModal = () => {
  const openButton = document.getElementById(
    "open-video-modal",
  ) as HTMLElement | null;
  const modal = document.getElementById("video-modal") as HTMLElement | null;
  const backdrop = document.getElementById(
    "video-modal-backdrop",
  ) as HTMLElement | null;
  const panel = document.getElementById(
    "video-modal-panel",
  ) as HTMLElement | null;
  const closeButton = document.getElementById("close-video-modal");
  const player = document.getElementById(
    "video-modal-player",
  ) as HTMLElement | null;

  if (
    !openButton ||
    !modal ||
    !backdrop ||
    !panel ||
    !player ||
    modal.dataset.initialized === "true"
  ) {
    return;
  }

  modal.dataset.initialized = "true";

  const videoId = openButton.dataset.videoId;

  const showModal = () => {
    if (!videoId || !VIDEO_ID_PATTERN.test(videoId)) {
      return;
    }

    toggleModalVisibility(modal, backdrop, panel, true);
    panel.classList.add("scale-100");
    panel.classList.remove("scale-95");

    if (player.childElementCount === 0) {
      player.replaceChildren(createVideoFrame(videoId));
    }
  };

  const hideModal = () => {
    toggleModalVisibility(modal, backdrop, panel, false);
    panel.classList.add("scale-95");
    panel.classList.remove("scale-100");
    player.replaceChildren();
  };

  openButton.addEventListener("click", showModal);
  closeButton?.addEventListener("click", hideModal);

  modal.addEventListener("click", ({ target }) => {
    if (!panel.contains(target as Node | null)) {
      hideModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      hideModal();
    }
  });
};

initRoadmapModal();
initVideoModal();
