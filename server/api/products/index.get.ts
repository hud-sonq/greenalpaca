import mongoose from "mongoose";
import ProductSchema from "~/schemas/Product.schema";
import { Product } from "~/server/models/Product.model";
import fs from "fs";
import path from "path";

const allProducts = async () => {
    const products = await Product.find({}).lean().exec();
    // programatically get the 'imageDir' property from the schema, and grab each image in that directory and append to each of the products ' images[]' property
    products.forEach((product) => {
        const imageDir = path.join('public', product.imageDir);
        const images = fs.readdirSync(imageDir);
        product.images = images;
    });
   return products;
}


export default eventHandler(async () => {
    const products = await allProducts();
    return products;
})
