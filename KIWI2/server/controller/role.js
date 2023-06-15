import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createRole = async (req, res) => {
    connect()
    query('INSERT INTO roles (role) VALUES ($1)', [req.body.role], function () {
        disconnect()
    })
}

export const getRoles = (req, res) => {
    connect()
    query('SELECT * FROM roles', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const deleteRole = async (req, res) => {
    connect()
    query('DELETE  FROM roles WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
