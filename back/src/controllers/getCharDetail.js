const axios = require('axios');

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "b602bc6bb281.f1db9a9024056237f9a0";

const getCharDetail = async (req,res) => {
    try {
        // const {detailId} = req.params
        const response = await axios.get(`${URL_BASE}/character/${req.params.id}?key=${KEY}`)
        const {id,name,status,gender,origin,species,image} = response.data
        res.status(200).json({id,name,status,species,gender,origin:origin.name,image})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharDetail;
