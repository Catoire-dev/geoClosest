export const fetchApi = async (api, query) => {
    try {
        const res = await fetch(`${api}${query}`);
            if (res.ok) {
                return await res.json();
            } else {
                console.log('Error with api call');
            }
        } catch (e) {
            // console.log(e);
        }
}

export const fetchAddress = async (query) => {
    const api = 'https://api-adresse.data.gouv.fr/search/?q=';
    try {
        const data = await fetchApi(api, query);
        updateDataStudent(data);
        return data;
    } catch (err) {
        console.log(err)
    }
}

const updateDataStudent = (data) => {
    let tab = []
    if (data != null) {
        console.log('update')
        data.features.forEach(e => {
            tab.push(e.properties.label)
        });
        localStorage.setItem('OrganizationAddress', tab);
    }
}

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
