import blockProjects from "./data/projectblockdata.js";

const container = document.getElementById("pblocks");

blockProjects.forEach((result) => {
  // the first entry in the data file has stray quotes around its url
  const url = String(result.url).replace(/^["']+|["']+$/g, "");

  container.innerHTML += `
  <div class="column">
    <a class="pblink" href="${url}" target="_blank" rel="noopener">
      <div class="projectblock">
        <img src="${result.image}" alt="${result.title}" />
      </div>
    </a>
  </div>
  `;
});
