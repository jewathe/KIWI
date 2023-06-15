
'use strict'
import express from 'express'

// ROUTES
import categoryRoute from './routes/category.js'
import recipeRoute from './routes/recipe.js'
import likeRoute from './routes/like.js'
import ingredientRoute from './routes/ingredient.js'
import joinRoute from './routes/join.js'
import stepRoute from './routes/step.js'
import favoriteRoute from './routes/favorite.js'
import groceryRoute from './routes/grocery.js'
import groceriesDetailsRoute from './routes/groceries_details.js'
import roleRoute from './routes/role.js'
import userRoute from './routes/user.js'
// import multer from 'multer'
// import morgan from 'morgan'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import helmet from 'helmet'

/* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
const app = express()

// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
// app.use(morgan('common'))
// set directory where we keep our assets
// app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

const PORT = 8080
const CONTENT_TYPE_HTML = 'text/html'
const HTTP_OK = 200

// nodeFs.saveDatas(DATAS_FILE_NAME, TEST_DATA)

// Only to show node-fs-client
// CORS for development only
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

//  categories ****************************************************************************

// ROUTE
app.use('/categories', categoryRoute)
app.use('/recipes', recipeRoute)
app.use('/likes', likeRoute)
app.use('/ingredients', ingredientRoute)
app.use('/joins', joinRoute)
app.use('/steps', stepRoute)
app.use('/favorites', favoriteRoute)
app.use('/groceries', groceryRoute)
app.use('/groceries', groceryRoute)
app.use('/groceries-details', groceriesDetailsRoute)
app.use('/roles', roleRoute)
app.use('/users', userRoute)
// methode privee *******************************************************************

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
