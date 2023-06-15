import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createGrocery = async (req, res) => {
    connect()
    query('INSERT INTO groceries (recipe_id) VALUES ($1)', [req.body.recipe_id], function () {
        disconnect()
    })
    console.log('recipe id pour groceries ' + req.body.recipe_id)
}

export const getGroceriesDetails = async (req, res) => {
    connect()
    query('SELECT i.id AS id,i.image AS image, i.name AS ingredient_name,sum(ri.quantity*r.portions) AS quantity FROM recipe AS r INNER JOIN groceries AS g ON r.id=g.recipe_id INNER JOIN recipe_ingredients AS ri ON r.id=ri.recipe_id INNER JOIN ingredient AS i ON i.id=ri.ingredient_id GROUP BY i.id, i.name', [], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        disconnect()
    })
}

export const deleteGrocery = async (req, res) => {
    connect()
    query('DELETE  FROM groceries WHERE id=$1', [req.params.id], (result) => {
        req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
