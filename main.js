import Plyr from "plyr";

import "./style.css";

document.querySelector("#app").innerHTML = `
<video id="player" playsinline controls data-poster="./assets/profile.jpg">
<source src="./assets/video.mp4" type="video/mp4" />
//   <source src="/path/to/video.webm" type="video/webm" />

  <!-- Captions are optional -->
  <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
  </video>
  
  `;

const player = new Plyr("#player", {
    keyboard: { focused: true, global: true },
});
document.querySelector("#counter");
