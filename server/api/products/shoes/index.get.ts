import mongoose from "mongoose";
import ProductSchema from "~/schemas/Product.schema";
import { Product } from "~/server/models/Product.model";
import fs from "fs";
import path from "path";

const onlyAccessories = async (event: any) => {
    const products = await Product.find({ category: 'shoes' }).lean().exec();
    products.forEach((product) => {
        const imageDir = path.join('public', product.imageDir);
        const images = fs.readdirSync(imageDir);
        product.images = images;
    });
    return products;
}

export default eventHandler(async (event: any) => {
    return await onlyAccessories(event);
})