
'use strict'

import pg from 'pg'
const Client = pg.Client

let client = {}

export function connect () {
    client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'kiwidb',
        user: 'postgres',
        password: 'postgres'
    })

    client.connect((error) => {
        if (error) {
            throw error
        }
    })
}

export function query (query, values, resultCallback) {
    client.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}

export function disconnect () {
    client.end()
}
