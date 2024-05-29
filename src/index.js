const blingData = []
const blingDisplay = document.querySelector("#BlingDisplay");

const blingRender = () => {
  fetch(`http://localhost:3000/data`)
  .then((response) => response.json())
  .then((data) => {
      blingData.push(...data)
      renderBling(blingData);                                                                                                        
    });
  }

const renderBling = (data) => {
    blingDisplay.innerHTML = "";
  
    data.forEach((item) => {
      const imgElement = document.createElement("img");
      imgElement.src = item.image;
      imgElement.id = item.name;
      imgElement.classList = item.category;
      blingDisplay.appendChild(imgElement);
      imgElement.addEventListener("mouseover", () => {
        imgElement.style.display = ("none")
      imgElement.addEventListener("mouseout", () => {
        imgElement.style.display = ("block")
      } )
      })
    })
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