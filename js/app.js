const searchPhone = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
// search result
const displayPhone = data => {
    const searchResult = document.getElementById('search-result')
    //clear data
    searchResult.textContent = '';

    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadPhoneDetail(${data.idPhone})" class="card h-100">
                    <img src="${data.image}" class="card-img-top" alt="...">

                <div class="card-body">
                     <h5 class="card-title">${data.brand}</h5>
                    <p>${data.phone_name}</p>
                    <p>${data.slug}</p>

                    <div class="all-button">
                    <button class="btn btn-outline-success" type="button" id="button-search">Feaser</button>
                    </div>

                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}


//load phone details
const loadPhoneDetail = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`

    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetail(data.data[0]);
}
// phone info
const displayPhoneDetail = data => {
    const phoneDetails = document.getElementById('phone-details');

    phoneDetails.textContent = '';

    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">

<div class="card-body">
     <h5 class="card-title">${data.brand}</h5>
    <p>${data.phone_name}</p>
    <p>${data.slug}</p>

</div>
`;
    phoneDetails.appendChild(div);
}