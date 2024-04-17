// Optimal adresse : 1 rue de la paix, 75002, Paris
export const get_coordinates = (adresse) => {
  try {
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${adresse}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.features[0].geometry.coordinates);
      });
  } catch (error) {
    console.log(error);
  }
};

// mode : pedestrian, car
export const get_distance = (latitude1, longitude1, latitude2, longitude2, mode) => {
  try {
    fetch(
      `https://wxs.ign.fr/calcul/geoportail/itineraire/rest/1.0.0/route?resource=bdtopo-pgr&profile=${mode}&optimization=fastest&start=${longitude1},${latitude1}&end=${longitude2},${latitude2}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.geometry.coordinates);
      });
  } catch (error) {
    console.log(error);
  }
};
