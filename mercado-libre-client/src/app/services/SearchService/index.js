

class SearchService {

    static getSearch(qry) {
        return fetch('http://localhost:9000' + `/api/items?q=${qry}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(results => results.json())
    }

}

export default SearchService;