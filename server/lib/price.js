const axios = require('axios');
const getPrice = (p) => {
    return axios.get("https://api.priceapi.com/jobs")
}