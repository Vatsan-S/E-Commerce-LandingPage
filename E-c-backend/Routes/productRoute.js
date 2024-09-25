import express from 'express'
import {  listProduct } from '../Controllers/productController.js'


const productRouter = express.Router()


productRouter.get('/list', listProduct)


export default productRouter
