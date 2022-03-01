const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.phones))
}
// search result
const displayPhone = phones => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
}
