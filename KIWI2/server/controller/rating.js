import { connect, query, disconnect } from '../dao/dao.js'
// import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createRating = async (req, res) => {
    connect()
    query('INSERT INTO recipe (rating) VALUES ($1)', [req.body.rating], function () {
        disconnect()
    })
    // console.log(req.body.name)
}
