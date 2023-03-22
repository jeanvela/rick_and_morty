const http = require('http')
const characters = require('./utils/data.js')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('rickandmorty/character')) {
        res.writeHead(200,{'content': 'text-Type'})
        res.end()
    }
}).listen(3001,'localhost')