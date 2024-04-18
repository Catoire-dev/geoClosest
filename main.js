import { dataStudent } from "./handleForm.js";
import { get_coordinates } from "./api.js";
import { get_distance } from "./api.js";

var parsedStudent = JSON.parse(dataStudent);

parsedStudent.forEach((student, index) => {
  get_coordinates(
    student.adresse + " " + student.codePostal + " " + student.ville
  );

  if (index < parsedStudent.length - 1) {
    get_distance(
      student.latitude,
      student.longitude,
      //   company.latitude,
      //   company.longitude,
      48.8398174, //exemple
      2.353964, //exemple
      "pedestrian"
    );
  }
});
