const express = require('express')
const ProductsService = require('./../services/products.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/products.schema')

const router = express.Router()

const service = new ProductsService()


router.get('/', async (req, res) => {
    const products = await service.find()
    res.json(products)
})

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const products = await service.findOne(id)
            if (products) {
        
                res.status(200).json(products)
            } else {
                res.status(404).json({
                    message: 'not found'
                })
            }

        } catch (error) {
            next(error)
        }


    }
)

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
        const body = req.body
        const newProduct = await service.create(body)

        res.status(201).json(newProduct)
    }
)

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const product = await service.update(id, body)
            res.json(product)

        } catch (error) {
            // res.status(404).json({
            //     message: error.message
            // })
            next(error)

        }

    }
)

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    rta = await service.delete(id)
    res.json(rta)
})

module.exports = router