import Product from "../models/productModal.js";

export const listProduct = async(req,res)=>{
    try {
      const products = await Product.find()
      res.status(200).json({list:products})
    } catch (error) {
      console.log(error)
      res.status(500).json({message:"Internal server error in listing product"})
    }
  }