const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { checkApiKey } = require('./middlewares/auth.handler');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const { config } = require('./config/config')

const app = express()
const port = config.port || 3000;

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

require('./utils/auth');

app.get('/', (req, res) => res.send('Hello world'))

app.get('/nueva-ruta', checkApiKey, (req, res) => {
    res.send('Hola, soy una nueva ruta');
  });

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler);
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)
})




