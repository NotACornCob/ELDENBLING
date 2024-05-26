const blingRender = () => {
  const blingDisplay = document.querySelector("#BlingDisplay");
  
  fetch(`http://localhost:3000/data`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const imgElement = document.createElement("img");
      imgElement.src = item.image;
      imgElement.id = item.name;
      imgElement.classList.add("Bling");
      blingDisplay.appendChild(imgElement);
    });
  })
  }
  
  const main = document.addEventListener("DOMContentLoaded", () => {
    blingRender();
  })
  