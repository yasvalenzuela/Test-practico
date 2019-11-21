class DetailService {

    static getProductDetail(qry) {
        return fetch('http://localhost:9000' + `/api/items/${qry}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(results => results.json())
    }

}

export default DetailService;