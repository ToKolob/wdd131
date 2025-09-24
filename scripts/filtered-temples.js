import { temples } from "./temple-data.js";

function renderTemples(templeList = temples) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  for (const temple of templeList) {
    main.innerHTML += `
    <div class="temple">
      <figure>
        <img src="${temple.imageUrl}" loading="lazy" width="300px" height="200px" alt="${temple.templeName}">
        <figcaption><strong>${temple.templeName}</strong></figcaption>
      </figure>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    </div>`
    ;
  }
}

function renderNewTemples(){
  const newTemples = temples.filter(temple => {
    const dedicatedDate = new Date(temple.dedicated);
    const cutoffDate = new Date('2000-01-01');
    return dedicatedDate >= cutoffDate;
  });
  renderTemples(newTemples);
}
const newTemples = document.getElementById("new-temples");
newTemples.addEventListener("click", renderNewTemples);

function renderOldTemples(){
  const oldTemples = temples.filter(temple => {
    const dedicatedDate = new Date(temple.dedicated);
    const cutoffDate = new Date('1900-01-01');
    return dedicatedDate < cutoffDate;
  });
  renderTemples(oldTemples);
}
const oldTemples = document.getElementById("old-temples");
oldTemples.addEventListener("click", renderOldTemples);

function renderLargeTemples(){
  const largeTemples = temples.filter(temple => temple.area > 90000);
  renderTemples(largeTemples);
}
const largeTemples = document.getElementById("large-temples");
largeTemples.addEventListener("click", renderLargeTemples);

function renderSmallTemples(){
  const smallTemples = temples.filter(temple => temple.area < 10000);
  renderTemples(smallTemples);
}
const smallTemples = document.getElementById("small-temples");
smallTemples.addEventListener("click", renderSmallTemples);

const home = document.getElementById("home");
home.addEventListener("click", () => renderTemples());
renderTemples();