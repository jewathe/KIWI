import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createFavorite = async (req, res) => {
    connect()
    query('INSERT INTO favoris (recipe_id) VALUES ($1)', [req.body.recipe_id], function () {
        disconnect()
    })
    console.log('recipe id pour favoris ' + req.body.recipe_id)
}

export const getFavorites = async (req, res) => {
    connect()
    query('SELECT DISTINCT r.image AS image,r.proposed_title AS title   FROM recipe AS r INNER JOIN favoris AS f ON r.id=f.recipe_id ', [], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        disconnect()
    })
}

export const deleteFavorite = async (req, res) => {
    connect()
    query('DELETE  FROM favoris WHERE id=$1', [req.params.id], (result) => {
        req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
