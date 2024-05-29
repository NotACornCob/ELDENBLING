const blingData = []
const blingDisplay = document.querySelector("#BlingDisplay");

const blingRender = () => {
  fetch(`http://localhost:3000/data`)
  .then((response) => response.json())
  .then((data) => {
      blingData.push(...data);
      renderFilter();
      renderBling(data);
    })
  }
  
const renderBling = (data) => {
  blingDisplay.innerHTML = "";
  data.forEach((item) => {
    const imgElement = document.createElement("img");
    const headerElement = document.createElement("h4")
    const paraElement = document.createElement("p")
    const divElement = document.createElement("div")
    const textDiv = document.createElement("div")
    imgElement.classList = item.category;
    textDiv.classList = "textDiv";
    headerElement.innerText = item.name;
    paraElement.innerText = item.description;
    imgElement.src = item.image;
    blingDisplay.appendChild(divElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(textDiv)
    textDiv.appendChild(headerElement);
    textDiv.appendChild(paraElement);
    handleMouseOver(divElement, imgElement, textDiv);
    handleMouseOut(divElement, imgElement, textDiv);
  })
}
  
const handleMouseOver = (divElement, imgElement, textDiv) => {
  divElement.addEventListener("mouseover", () => {
    imgElement.style.display = "none";
    textDiv.style.display = "block";
  })
}

const handleMouseOut = (divElement, imgElement, textDiv) => {
  divElement.addEventListener("mouseout", () => {
    imgElement.style.display = "block";
    textDiv.style.display = "none";
  })
}
  
const renderFilter = () => {
  const armSlot = document.querySelector("#ArmDisplay > img");
  const headSlot = document.querySelector("#HelmDisplay > img");
  const torsoSlot = document.querySelector("#BreastPlateDisplay > img");
  const legSlot = document.querySelector("#LegDisplay > img");
  handleFilterClick(armSlot, "Gauntlets");
  handleFilterClick(headSlot, "Helm");
  handleFilterClick(torsoSlot, "Chest Armor");
  handleFilterClick(legSlot, "Leg Armor");
}
  
const handleFilterClick = (element, category) => {
    element.addEventListener("click", () => {
      const filteredBling = blingData.filter((item) => item.category === category);
      return renderBling(filteredBling);
  })
}

const main = document.addEventListener("DOMContentLoaded", () => {
    blingRender();
  })
