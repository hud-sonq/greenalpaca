// if you find yourself in this file,
// please help me so i can use this instead of all the different product directories

import mongoose from "mongoose";
import ProductSchema from "~/schemas/Product.schema";
import { Product } from "~/server/models/Product.model";
import fs from "fs";
import path from "path";

const getProducts = async (category: string) => {
    const products = await Product.find({ category }).lean().exec();
    products.forEach((product) => {
        const imageDir = path.join('public', product.imageDir);
        const images = fs.readdirSync(imageDir);
        product.images = images;
    });
    return products;
}


export default eventHandler(async (event: any) => {
  const category = event.queryStringParameters.category;
  return await getProducts(category);
})
