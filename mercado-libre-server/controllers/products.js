
const requestPromise = require('request-promise');


const getProducts = (req, res) => {
    
    const qry = req.query.q;
    const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${qry}`;

    requestPromise(URL).then(response => {

        res.send(response)

    })
}

const getDetailProduct = (req, res) => {

    const id = req.params.id;
    const URL = `https://api.mercadolibre.com/items/${id}`;

    requestPromise(URL).then(response => {

        res.send(response)

    })
}

module.exports = {
    getProducts,
    getDetailProduct
}