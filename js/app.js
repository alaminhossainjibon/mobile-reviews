// search phone
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
}
// search result
const displayPhone = data => {
    const searchResult = document.getElementById('search-result')
    //clear data
    searchResult.textContent = '';
    // phone of names, brand names, and model names
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div (${data.idphone})" class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title">Brand: ${data.brand}</h5>
            <p>Name: ${data.phone_name}</p>
            <p>Model: ${data.slug}</p>

            <button onclick="details('${data.idphone}')" class="btn btn-outline-success" type="button">Featur</button>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
}

// //////phone featur added
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data[0]));
}
const setDetails = (id) => {
    document.getElementById('search-field').innerHTML = `
    <p>${data.mainFeatures.storage}</p>
    `;

}