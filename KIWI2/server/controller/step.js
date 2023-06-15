import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createStep = async (req, res) => {
    connect()
    query('INSERT INTO steps (recipe_id, description, step_no,step_image) VALUES ($1, $2, $3)', [req.body.recipe_id, req.body.description, req.body.step_no], function () {
        disconnect()
    })
    console.log('recipe_id : ' + req.body.recipe_id)
    console.log('Description de step : ' + req.body.description)
    console.log('numero de step : ' + req.body.step_no)
}

export const getStep = async (req, res) => {
    connect()
    query('SELECT * FROM steps  WHERE recipe_id=$1', [req.params.id], (resp) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(resp, null, 4))

        disconnect()
    })
}
