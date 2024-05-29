const blingData = []
const blingDisplay = document.querySelector("#BlingDisplay");

const blingRender = () => {
  fetch(`http://localhost:3000/data`)
  .then((response) => response.json())
  .then((data) => {
      blingData.push(...data);
      renderFilter(data);
      renderBling(data);
    });
  }

const renderFilter = (data) => {
  const armSlot = document.querySelector("#ArmDisplay > img");
  const headSlot = document.querySelector("#HelmDisplay > img");
  const torsoSlot = document.querySelector("#BreastPlateDisplay > img");
  const legSlot = document.querySelector("#LegDisplay > img");
  handleFilterClick(data, "Gauntlets", armSlot);
  handleFilterClick(data, "Helm", headSlot);
  handleFilterClick(data, "Chest Armor", torsoSlot);
  handleFilterClick(data, "Leg Armor", legSlot);
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
    
  const handleFilterClick = (data, category, element) => {
      
    element.addEventListener("click", () => {
      console.log("click");
      const filteredBling = data.filter((data) => data.category === category);
      renderBling(filteredBling);
  })
}

/* const filterClickHandler2 = (input, filter, blingData) => {
  const helmFilter = blingData.filter((bling) => bling.category === "Helm") 
  const gauntletFilter = blingData.filter((bling) => bling.category === "Gauntlets")
  const chestFilter = blingData.filter((bling) => bling.category === "Chest Armor")
  const legFilter = blingData.filter((bling) => bling.category === "Leg Armor")

  input.addEventListener("click", () => { 
  console.log("click")
  const filteredBling = blingData.filter((bling) => bling.category === filter)

  }


   )
  
  { 

} */


const main = document.addEventListener("DOMContentLoaded", () => {
    blingRender();
    renderFilter();
  })
