function fetchItems(searchQuery) {
    
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    return fetch(url).then(res => res.json())
}

export default fetchItems