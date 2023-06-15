import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createLike = async (req, res) => {
    connect()
    query('INSERT INTO likes (recipeid, userid) VALUES ($1, $2)', [req.body.recipeid, req.body.userid], function () {
        disconnect()
    })
}

export const getLikes = async (req, res) => {
    connect()
    query('SELECT COUNT(*) FROM likes  WHERE recipeId=$1', [req.params.id], (resp) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(resp, null, 4))

        disconnect()
    })
}

export const deleteLike = async (req, res) => {
    connect()
    query('DELETE  FROM likes WHERE id=$1', [req.params.id], (result) => {
        req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}

export const deleteLikeByUserAndRecipe = async (req, res) => {
    connect()
    query('DELETE  FROM likes WHERE userId=$1 AND recipeId=$2', [req.params.userId, req.params.recipeId], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
