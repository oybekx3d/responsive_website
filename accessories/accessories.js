function loadPage() {
    const jsonName = `expansions/data.json`;
    fetch(jsonName)
        .then(response => response.json())
        .then(data => 
            Object.values(data).forEach(datum => {
            let innerCont = document.getElementById('innerCont');
            let newButton = document.createElement('button');
            newButton.id = "sCont";
            newButton.onclick = () => openPopUp(datum.itemID);
            let image = document.createElement('img');
            image.src = datum.itemImgLink;
            let text = document.createElement('h3');
            text.textContent = datum.itemName;
            newButton.appendChild(image);
            newButton.appendChild(text);
            innerCont.appendChild(newButton);
          })
        );
    }






























function openPopUp(id) {
    const popUp = document.getElementById("popUp");
    const itemName = document.getElementById("itemName");
    const itemDescription = document.getElementById("itemDescription");
    const itemPrice = document.getElementById("itemPrice");
    const itemImgLink = document.getElementById("itemImgLink");
    const itemBuyLink = document.getElementById("itemBuyLink");
    const jsonName = `expansions/data.json`;
    fetch(jsonName)
        .then(response => response.json())
        .then(data => {
            itemName.textContent = data[id].itemName;
            itemDescription.textContent = data[id].itemDescription;
            itemPrice.textContent = data[id].itemPrice;
            itemImgLink.src = data[id].itemImgLink;
            itemBuyLink.href = data[id].itemBuyLink;
        });
    popUp.style.display = "flex";
}
function closePopUp() {
    document.getElementById("popUp").style.display = "none";
}