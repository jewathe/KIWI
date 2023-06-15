import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createUser = async (req, res) => {
    connect()
    query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3)', [req.body.name, req.body.email, req.body.password], function () {
        disconnect()
    })
    // console.log(req.body.name)
}

export const getUsers = (req, res) => {
    connect()
    query('SELECT * FROM users', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const getUser = (req, res) => {
    connect()
    query('SELECT u.name AS name, u.email AS email, u.password AS password, r.role AS role FROM users AS u INNER JOIN roles AS r ON u.role=r.id WHERE email=$1 ', [req.params.email], (resp) => {
        writeJSONResponse(req, res, resp)
        console.log(resp.rows[0].name)
        disconnect()
    })
    console.log(req.params.email)
}

export const deleteUser = async (req, res) => {
    connect()
    query('DELETE  FROM users WHERE email=$1', [req.params.email], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
