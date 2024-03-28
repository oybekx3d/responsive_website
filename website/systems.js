function updateJson(id){
    jsonName = "data" + id + ".json";
    fetch(jsonName)
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        document.getElementById("cpu").innerText = data.cpu;
        document.getElementById("cpuCooler").innerText = data.cpuCooler;
        document.getElementById("mobo").innerText = data.mobo;
        document.getElementById("ram").innerText = data.ram;
        document.getElementById("ssd").innerText = data.ssd;
        document.getElementById("gpu").innerText = data.gpu;
        document.getElementById("case").innerText = data.case;
        document.getElementById("psu").innerText = data.psu;
        let totalPrice = "Total price: " + data.price;
        document.getElementById("price").innerText = totalPrice;
        document.getElementById("link").setAttribute("href", data.link);
        }
    );
}