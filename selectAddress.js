import {fetchAddress} from './api.js';


const selectAddress = document.querySelector('#address-input');
const addressList = document.querySelector('#search-list');

const setOrgAddress = (e) => {
    localStorage.setItem('selectedAdr', e.target.innerHTML);
    setSelectedAdr(e.target.innerHTML);
    deleteList();
}

const getOrgAddress = (e) => {
    return localStorage.getItem('selectedAdr')
}

const setSelectedAdr = (adr) => {
    selectAddress.value = adr;
}

const updateSearchList = () => {
    try {
        fetchAddress(selectAddress.value);
        createList();
    } catch (e) {
        console.log(e)
        console.log('waiting')
    }
}

const createList = () => {
    let data = localStorage.getItem('OrganizationAddress');
    if (data != null) {
        deleteList();
        let tab = data.split(',');
        tab.forEach(e => {
            let item = document.createElement('li');
            item.classList.add('address-item')
            item.innerHTML = e;
            item.addEventListener("click", setOrgAddress);
            addressList.appendChild(item);
        });
    }
}

const deleteList = () => {
    const addressItem = document.querySelectorAll('.address-item');
    addressItem.forEach(e => {
        e.remove();
    })
}

const displaySearchList = () => {
    addressList.style.visibility = 'visible';
    createList();
}

const hideSearchList = () => {
    setTimeout(() => {
            addressList.style.visibility = 'hidden';
            deleteList();
        },
        100
)}

hideSearchList();
selectAddress.value = getOrgAddress()

selectAddress.addEventListener('focus', displaySearchList);
selectAddress.addEventListener('focusout', hideSearchList);
selectAddress.addEventListener('input', updateSearchList);

