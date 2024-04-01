function loadPage(cat) {
    const jsonName = $cat+`/data.json`;
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