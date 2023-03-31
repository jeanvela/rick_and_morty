const express = require('express')
const server = express()
const router = require('./routes')
const cors = require('cors')

const PORT = 3001
server.use(cors())
server.use(express.json())
server.use('/',router)

server.listen(PORT, () => {
    console.log('Server raised in port' + PORT)
})