import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { sampleProducts, sampleUsers } from '../data'
import { ProductModel } from '../models/productModel'
import { UserModel } from '../models/userMordel'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)

    await UserModel.deleteMany({})
    const createdusers = await UserModel.insertMany(sampleUsers)
    res.json({ createdProducts, createdusers })
  })
)
