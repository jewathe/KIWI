import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createJoin = async (req, res) => {
    connect()
    query('INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES ($1, $2, $3)', [req.body.ingredient_id, req.body.recipe_id, req.body.quantity], function () {
        disconnect()
        console.log('valeur ing= ' + req.body.ingredient_id)
        console.log('valeur rec= ' + req.body.recipe_id)
        console.log('quantite= ' + req.body.quantity)
    })
}

export const getJoins = (req, res) => {
    connect()
    query('SELECT * FROM recipe_ingredients', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const deleteJoin = async (req, res) => {
    connect()
    query('DELETE  FROM recipe_ingredients WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}

export const getJoin = async (req, res) => {
    connect()
    query('SELECT DISTINCT ri.recipe_id AS recipe_id, r.image AS recipe_image,r.proposed_description AS recipe_description,r.cooking_time AS cooking_time,r.preparation_time AS preparation_time ,r.proposed_title AS recipe_name, i.name AS name,ri.quantity AS quantity,i.image AS image  FROM recipe_ingredients AS ri INNER JOIN recipe AS r ON r.id=ri.recipe_id INNER JOIN ingredient AS i ON i.id=ri.ingredient_id  WHERE recipe_id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        disconnect()
    })
}
