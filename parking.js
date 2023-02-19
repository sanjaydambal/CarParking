let btn = document.getElementById("submit");
btn.addEventListener('click', event => {
    parkCar();
});
let parkedVehicleDetails = []
let id = 0;
function parkCar() {
    console.log(document.getElementById("Oname").value);
    console.log(document.getElementById("Rnumber").value);
    let parkedVehicle = {
        owner_name: document.getElementById("Oname").value,
        car_reg_no: document.getElementById("Rnumbe").value,
        id: id++
    }
    parkedVehicleDetails.push(parkedVehicle);

    generateVehicleTable(parkedVehicleDetails)

}

function generateVehicleTable(parkedVehicleDetails) {
    var html = "<table border='1|1'>";
    for (var i = 0; i < parkedVehicleDetails.length; i++) {
        html += "<tr>";
        html += "<td>" + parkedVehicleDetails[i].owner_name + "</td>";
        html += "<td>" + parkedVehicleDetails[i].car_reg_no + "</td>";
        html += "<td>" + "<button id=" + parkedVehicleDetails[i].id + "  onclick=deleteFromTable(" + parkedVehicleDetails[i].id + ")>Delete</button>" + "</td>";
        html += "</tr>";

    }
    html += "</table>";
    document.getElementById("vehicles").innerHTML = html;
}

function deleteFromTable(id) {
    parkedVehicleDetails = parkedVehicleDetails.filter(obj => obj.id != id);
    generateVehicleTable(parkedVehicleDetails);
}