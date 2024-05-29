const blingData = []
const blingDisplay = document.querySelector("#BlingDisplay");

const blingRender = () => {
  fetch(`http://localhost:3000/data`)
  .then((response) => response.json())
  .then((data) => {
      blingData.push(...data)
      renderBling(data);
    });
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
      divElement.addEventListener("mouseover", () => {
        handleMouseOver(imgElement, textDiv);
       })
      divElement.addEventListener("mouseout", () => {
        handleMouseOut(imgElement, textDiv);
      })
      })
  
  const handleMouseOver = (imgElement, textDiv) => {
      imgElement.style.display = "none";
      textDiv.style.display = "block";
      }
    }

  const handleMouseOut = (imgElement, textDiv) => {
      imgElement.style.display = "block";
      textDiv.style.display = "none";
    }

  const armSlotClickHandler = () => {
    const armSlot = document.querySelector("#ArmDisplay > img");
  
    armSlot.addEventListener("click", () => {
      console.log("click");
      const filteredBling = blingData.filter((bling) => bling.category === "Gauntlets");
      renderBling(filteredBling);
  })
  }

const headSlotClickHandler = () => {
  const headSlot = document.querySelector("#HelmDisplay > img")

  headSlot.addEventListener("click", () => {
    console.log("click");
    const filteredBling = blingData.filter((bling) => bling.category === "Helm");
    renderBling(filteredBling);
  })
}

const torsoSlotClickHandler = () => {
  const torsoSlot = document.querySelector("#BreastPlateDisplay > img");

  torsoSlot.addEventListener("click", () => {
    console.log("click");
    const filteredBling = blingData.filter((bling) => bling.category === "Chest Armor");
    renderBling(filteredBling);
  })
}

const legSlotClickHandler = () => {
  const legSlot = document.querySelector("#LegDisplay > img");

  legSlot.addEventListener("click", () => {
    console.log("click");
    const filteredBling = blingData.filter((bling) => bling.category === "Leg Armor");
    renderBling(filteredBling);
})
}

const filterClickHandler = () => {
  torsoSlotClickHandler();
  armSlotClickHandler();
  legSlotClickHandler();
  headSlotClickHandler();
}

const main = document.addEventListener("DOMContentLoaded", () => {
    blingRender();
    filterClickHandler();
  })