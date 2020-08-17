import blockProjects from "./data/projectblockdata.js";

const container = document.getElementById("pblocks");

blockProjects.forEach((result, idx) => {
  // Construct card content
  const content = `
  <div class="column">
  <a class="pblink" href=${result.url} target="_blank">
  <div class="projectblock" >
    <div class="projectcontent">
      <h1 class="pbtitle">${result.title}</h1>
      <hr style="margin: 0px; height:1px; width:40  %"/>
      <br>
      <span class="pbicon">

          <i class="fab fa-google-play "></i>
      
      </span>
    </div>
  </div>
  </a>
</div>
    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
