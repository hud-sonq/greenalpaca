import { Product } from "~/server/models/Product.model";

const getAvailableBrands = async (event: any) => {
    let available: string[];
    available = await Product.distinct('brand').lean().exec();
    return available;
}

export default eventHandler(async (event: any) => {
    return await getAvailableBrands(event);
})
