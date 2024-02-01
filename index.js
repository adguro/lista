const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

// const whitelist = ['http:/localhost:8080', 'http://myapp.com']
// const options = {
//     origin: (origin, callback) => {
//         if (whitelist.includes(origin)){
//             callback(null, true)
//         } else {
//             callback(new Error('no permitido'))
//         }

//     }
// }
// app.use(cors(options))

app.use(cors())
app.get('/', (req, res) => res.send('Hello world'))

// app.get('/users', (req, res) => {
//     const { limit, offset } = req.query
//     if (limit && offset){
//         res.json({
//             limit,
//             offset
//         })
//     } else {
//         res.send('No hay parámetros')
//     }
// })

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//     const { categoryId, productId } = req.params
//     res.json({
//         categoryId,
//         productId,
//         price: 1000
//     })
// })

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)

})




