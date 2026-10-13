import apps from "./data/appdata.js";

var useImagesAsIcons = true;

const appsContainer = document.getElementById("apps");

apps.forEach((app) => {
  var actioncontent = "";
  app.actions.forEach((action) => {
    actioncontent += `
  <a href="${action.link}" target="_blank" rel="noopener" class="actionIcon">
    ${getActionData(action)}
  </a>
  `;
  });

  var carouselContent = "";
  app.images.forEach((image, index) => {
    carouselContent += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${image}" alt="${app.title}" class="${
      app.isLs ? "projectImageLs" : "projectImage"
    }" />
    </div>`;
  });

  appsContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="workblock">
    <div class="workdetails" id="${app.isGame ? "game" : "app"}">
      <h1 id="wtitle">${app.title}</h1>
      <p id="wdescription">${app.description}</p>
      <hr />
      <p id="used">STACK USED</p>
      <p id="wstackused">${app.stack}</p>
      <div id="wicons">${actioncontent}</div>
    </div>
    <div class="workimage">
      <div class="carousel" data-interval="3000">
        <div class="carousel-inner">${carouselContent}</div>
      </div>
    </div>
  </div>
  `
  );
});

function getActionData(action) {
  return useImagesAsIcons
    ? `<img src="./icons/actionIcons/${action.image}.png" alt="">`
    : `<i class="${action.icon}"></i>`;
}

// Slideshow: replaces the old Bootstrap carousel (no jQuery / Bootstrap needed)
document.querySelectorAll(".carousel").forEach((carousel) => {
  // drop slides whose image file is missing
  carousel.querySelectorAll(".carousel-item img").forEach((img) => {
    img.addEventListener("error", () => {
      const item = img.closest(".carousel-item");
      const wasActive = item.classList.contains("active");
      item.remove();
      if (wasActive) {
        const first = carousel.querySelector(".carousel-item");
        if (first) first.classList.add("active");
      }
    });
  });

  const interval = Number(carousel.dataset.interval) || 3000;
  let paused = false;
  carousel.addEventListener("mouseenter", () => (paused = true));
  carousel.addEventListener("mouseleave", () => (paused = false));

  setInterval(() => {
    const items = carousel.querySelectorAll(".carousel-item");
    if (paused || items.length < 2) return;
    const current = [...items].findIndex((i) => i.classList.contains("active"));
    items[current]?.classList.remove("active");
    items[(current + 1) % items.length].classList.add("active");
  }, interval);
});
