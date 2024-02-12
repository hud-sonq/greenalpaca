import { Product } from "~/server/models/Product.model";
import fs from "fs";
import path from "path";

const getProducts = async (filter: string) => {
  const products = await Product.find({ 'subcategory': filter }).lean().exec();
  products.forEach((product) => {
    const imageDir = path.join('public', product.imageDir);
    const images = fs.readdirSync(imageDir);
    product.images = images;
  });
  return products;
}

export default eventHandler(async (filter: any) => {
  const query = getQuery(filter);
  const data = query.filter?.toString() || '';
  return await getProducts(data);
})
