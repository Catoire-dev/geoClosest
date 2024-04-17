export const dataStudent = localStorage.getItem("dataStudent");
const file = document.getElementById("filepicker");

file.addEventListener("change", (event) => {
  var reader = new FileReader();
  reader.readAsArrayBuffer(event.target.files[0]);
  reader.onload = function (event) {
    var data = new Uint8Array(reader.result);
    var work_book = XLSX.read(data, { type: "array" });
    var sheet_name = work_book.SheetNames;
    var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {
      header: 1,
    });
    var slicedSheetData = sheet_data.slice(1);
    formatSheet(slicedSheetData);
  };
});

function formatSheet(sheet_data) {
  var nomColumn = 0;
  var prenomColumn = 1;
  var codePostalColumn = 15;
  var adresseColumn = 17;
  var villeColumn = 20;

  var filteredData = sheet_data.map((row) => ({
    nom: row[nomColumn],
    prenom: row[prenomColumn],
    codePostal: row[codePostalColumn],
    adresse: row[adresseColumn],
    ville: row[villeColumn],
  }));

  var dataStringify = JSON.stringify(filteredData);

  var concatenatedAdress = sheet_data.map(
    (row) =>
      row[adresseColumn] + " " + row[codePostalColumn] + " " + row[villeColumn]
  );

  localStorage.setItem("dataStudent", dataStringify);
}
