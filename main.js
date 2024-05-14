import { eventFileChange } from "./handleForm.js";

/*
    <tr>
        <td>Maeva Oukid</td>
        <td>2h</td>
        <td>1h44 <span class="display-range">(28 km)</span></td>
        <td>39min <span class="display-range">(33 km)</span></td>
    </tr>
*/

/* 
    {
        "nom":"oukid",
        "prenom":"Maeva",
        "codePostal":75005,
        "adresse":"13 rue de santeuil","ville":"Paris"
    }
*/

const getDataStudent = () => {
    let dataStudent = localStorage.getItem('dataStudent');
    return JSON.parse(dataStudent);
}

const resetTableBody = () => {
    tableBody.innerHTML = '';
}

const createTableCels = (data, tableRow) => {
    const tdFullName = document.createElement('td');
    const tdTrainTravel = document.createElement('td');
    const tdVehiculeTravel = document.createElement('td');
    const tdBikeTravel = document.createElement('td');

    tdFullName.textContent = data.prenom + ' ' + data.nom;
    tdTrainTravel.textContent = Math.floor(Math.random() * 30);
    tdVehiculeTravel.textContent = Math.floor(Math.random() * 30);
    tdBikeTravel.textContent = Math.floor(Math.random() * 30);

    tableRow.appendChild(tdFullName);
    tableRow.appendChild(tdTrainTravel);
    tableRow.appendChild(tdVehiculeTravel);
    tableRow.appendChild(tdBikeTravel);
}

export const updateTableView = () => {
    let dataStudent = getDataStudent();
    resetTableBody(tableBody);

    if (dataStudent) {
        dataStudent.forEach(e => {
            const tableRow = document.createElement('tr');
            createTableCels(e, tableRow);
            tableBody.appendChild(tableRow);
        });
    } else {
        console.log('Erreur localStorage : dataStudent non trouver');
    }
}


let tableBody = document.getElementById('table-body');

const filePicker = document.getElementById("filepicker");
filePicker.addEventListener('change', (e) => eventFileChange(e));

updateTableView();
