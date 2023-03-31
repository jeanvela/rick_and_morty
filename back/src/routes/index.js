const { Router } = require('express')
const getCharById = require('../controllers/getCharById.js')
const getCharDetail = require('../controllers/getCharDetail.js')
// const expres = require('express')
const router = Router();
let favs = require('../utils/favs.js')

// router.use(expres())

router.get('/onsearch/:id',getCharById)

router.get('/detail/:id',getCharDetail)

router.post('/rickandmorty/fav',(req,res) => {
    favs.push(req.body)
    res.status(200).json(favs)
})

router.get('/rickandmorty/fav',(req,res) => {
    res.status(200).json(favs)
})

router.delete('/rickandmorty/fav/:id',(req,res) => {
    const { id } = req.params
    let nuevoFavs = favs.filter(char => char.id !== Number(id))
    favs = nuevoFavs
    res.status(200).json(favs)
})

module.exports = router;