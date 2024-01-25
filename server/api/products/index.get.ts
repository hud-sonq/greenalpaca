import mongoose from "mongoose";
import ProductSchema from "~/schemas/Product.schema";
import { Product } from "~/server/models/Product.model";


export default eventHandler(async (event) => {
    const products = await Product.find({}).lean().exec();
    return products;
})
