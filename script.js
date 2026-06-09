document.body.classList.add("js");

const viewButtons = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");

function showView(viewName) {
  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  });

  viewPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === viewName);
  });

  const activePanel = document.querySelector(`[data-view-panel="${viewName}"]`);
  if (activePanel) {
    activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

document.querySelectorAll("[data-view-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  });
});

function playShowcaseVideos() {
  document.querySelectorAll("[data-showcase-video]").forEach((video) => {
    video.muted = true;
    video.loop = true;

    const playVideo = () => {
      video.play().catch(() => {
        video.controls = true;
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }
  });
}

playShowcaseVideos();

const finalProductScreenshots = [
  {
    src: "images/130-image-Screenshot-2026-06-08-184845.png",
    alt: "GDevelop event sheet showing the beginning of Deepest Dungeon's event logic.",
    caption: "Event Sheet 1: Level events and player mechanics"
  },
  {
    src: "images/134-image-Screenshot-2026-06-08-184926.png",
    alt: "GDevelop event sheet showing additional Deepest Dungeon mechanics and event conditions.",
    caption: "Event Sheet 2: Upgrade systems"
  },
  {
    src: "images/136-image-Screenshot-2026-06-08-184944.png",
    alt: "GDevelop event sheet showing more of the final Deepest Dungeon event sequence.",
    caption: "Event Sheet 3: Procedural Generation event sequence"
  },
  {
    src: "images/138-image-Screenshot-2026-06-08-185000.png",
    alt: "GDevelop event sheet showing unique room assignment logic for Deepest Dungeon.",
    caption: "Event Sheet 4: Unique room assignment logic"
  }
];

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  let currentIndex = 0;
  const image = carousel.querySelector("[data-carousel-image]");
  const count = carousel.querySelector("[data-carousel-count]");
  const caption = carousel.querySelector("[data-carousel-caption]");

  function updateCarousel() {
    const current = finalProductScreenshots[currentIndex];
    image.src = current.src;
    image.alt = current.alt;
    count.textContent = `${currentIndex + 1} / ${finalProductScreenshots.length}`;
    caption.textContent = current.caption;
  }

  carousel.addEventListener("click", (event) => {
    if (event.target.matches("[data-carousel-prev]")) {
      currentIndex = (currentIndex - 1 + finalProductScreenshots.length) % finalProductScreenshots.length;
      updateCarousel();
    }

    if (event.target.matches("[data-carousel-next]")) {
      currentIndex = (currentIndex + 1) % finalProductScreenshots.length;
      updateCarousel();
    }
  });
});
