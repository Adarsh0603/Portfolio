import apps from "./data/appdata.js";
const appsContainer = document.getElementById("apps");
apps.forEach((app) => {
  var actioncontent = "";
  app.actions.forEach((action) => {
    var actiondata = `
  <a href="${action.link}"target="_blank">
  <i class="${action.icon}"></i></a>
  `;

    actioncontent += actiondata;
  });

  var content = `
  <div class="workblock" >
    <div class="workdetails"id=${app.isGame ? "game" : "app"}>
      <h1 id="wtitle">${app.title}</h1>
      <p id="wdescription">
      ${app.description}
      </p>
      <hr id=${app.isGame ? "game" : "app"}/>
      <p id="used">STACK USED</p>
      <p id="wstackused">${app.stack}</p>
      <div id="wicons">
    ${actioncontent}
      </div>
    </div>
    <div class="workimage">
   
    ${
      app.images.length < 2
        ? app.isGame
          ? `<img src="${app.images[0]}" alt="" id="wgameimg"/>`
          : `<img src="${app.images[0]}" alt="" id="wimg" />`
        : `
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${app.images[0]}" alt="" id="wimg" />
          </div>
          <div class="carousel-item">
            <img src="${app.images[1]}" alt="" id="wimg" />
          </div>
          <div class="carousel-item">
            <img src="${app.images[2]}" alt="" id="wimg" />
          </div>
        </div>
      </div>

      `
    }
    </div>
  </div>

  `;

  appsContainer.innerHTML += content;
});
