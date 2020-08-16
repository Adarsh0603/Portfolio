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
      <p class="pbdescription">${result.description}</p>
    
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

// top button

// //Get the button:
// var mybutton = document.getElementById("btnscroll");
// mybutton.addEventListener("click", topFunction);
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   console.log("called");
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
