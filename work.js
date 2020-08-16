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
  <div class="workblock">
    <div class="workdetails">
      <h1 id="wtitle">${app.title}</h1>
      <p id="wdescription">
      ${app.description}
      </p>
      <hr />
      <p id="used">STACK USED</p>
      <p id="wstackused">${app.stack}</p>
      <div id="wicons">
    ${actioncontent}
      </div>
    </div>
    <div class="workimage">
      ${
        app.images.length < 2
          ? `<img src="${app.images[0]}" alt="" id="wimg" />`
          : `
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${app.images[0]}" alt="" id="wimg" />
          </div>
          <div class="carousel-item">
            <img src="${app.images[1]}" alt="" id="wimg" />
          </div>
          <div class="carousel-item">
            <img src="${app.images[0]}" alt="" id="wimg" />
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

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#btnscroll").fadeIn();
    } else {
      $("#btnscroll").fadeOut();
    }
  });
  $("#btnscroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
