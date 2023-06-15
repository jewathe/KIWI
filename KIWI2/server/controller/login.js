import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createLogin = async (req, res) => {
    connect()
    query('INSERT INTO login (name, email,password) VALUES ($1, $2,$3)', [req.body.name, req.body.email, req.body.password], function () {
        disconnect()
    })
}

export const getLogin = (req, res) => {
    connect()
    query('SELECT * FROM login', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const deleteLogin = async (req, res) => {
    connect()
    query('DELETE  FROM login WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
