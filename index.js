import blockProjects from "./data/projectblockdata.js";

const container = document.getElementById("pblocks");

blockProjects.forEach((result, idx) => {
  // Construct card content
  const content = `
  <div class="column">
  <a class="pblink" href=${result.url} target="_blank">
  <div class="projectblock">    
  <img src="${result.image}" width="70%"/>
  </div>
  </a>
</div>
    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
