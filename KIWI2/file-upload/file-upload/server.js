'use strict'

const express = require('express')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: 'upload-folder'
})
const upload = multer({ storage: storage }).any()

const app = express()
app.use(express.static('public'))

const PORT = 8080
const HTTP_OK = 200
const HTTP_500 = 500

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': 'text/html' })
    response.end('<h1>Home page</h1>')
})

app.post('/upload', function (request, response) {
    console.log(request, response, request.body)

    upload(request, response, function (err) {
        if (err) {
            console.log(err)
            response.writeHead(HTTP_500, { 'Content-Type': 'text/html' })
            response.end('Error uploading file.')
        } else {
            console.log(request.body)
            response.writeHead(HTTP_OK, { 'Content-Type': 'text/html' })
            response.end('File has been uploaded')
        }
    })
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
