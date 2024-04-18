
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