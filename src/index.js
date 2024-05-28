const blingDisplay = document.querySelector("#BlingDisplay");

const blingRender = () => {
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

const armSlotClickHandler = () => {
  const armSlot = document.querySelector("#ArmDisplay > img");

  armSlot.addEventListener("click", () => {
    console.log("click");
    blingDisplay.filter((bling) => bling.category = "Gauntlets")
})
}

const headSlotClickHandler = () => {
  const headSlot = document.querySelector("#HelmDisplay > img")

  headSlot.addEventListener("click", () => {
    console.log("click");
    blingDisplay.filter((bling) => bling.category = "Helm")
  })
}

const torsoSlotClickHandler = () => {
  const torsoSlot = document.querySelector("#BreastPlateDisplay > img");

  torsoSlot.addEventListener("click", () => {
    console.log("click");
    blingDisplay.filter((bling) => bling.category = "Chest Armor")
  })
}

const legSlotClickHandler = () => {
  const legSlot = document.querySelector("#LegDisplay > img");

  legSlot.addEventListener("click", () => {
    console.log("click");
    blingDisplay.filter((bling) => bling.category = "Leg Armor")
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
  
