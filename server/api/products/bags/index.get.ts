import mongoose from "mongoose";
import ProductSchema from "~/schemas/Product.schema";
import { Product } from "~/server/models/Product.model";
import fs from "fs";
import path from "path";

const onlyBags = async (event: any) => {
    const products = await Product.find({ category: 'bags' }).lean().exec();
    products.forEach((product) => {
        const imageDir = path.join('public', product.imageDir);
        const images = fs.readdirSync(imageDir);
        product.images = images;
    });
    return products;
}

export default eventHandler(async (event: any) => {
    return await onlyBags(event);
})
