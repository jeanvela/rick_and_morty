const axios = require('axios');

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "b602bc6bb281.f1db9a9024056237f9a0";

const getCharById = async (req,res) => {
     // const { id } = req.params
    try {
        const response = await axios.get(`${URL_BASE}/character/${req.params.id}?key=${KEY}`)
        const {id,name,species,gender,image} = response.data
        res.status(200).json({id,name,species,gender,image})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharById;