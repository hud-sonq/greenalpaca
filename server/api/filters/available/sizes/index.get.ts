import { Product } from "~/server/models/Product.model";
const getAvailableSizes = async (event: any) => {
    const available = await Product.distinct('size').lean().exec();
    return available;
}

export default eventHandler(async (event: any) => {
    return await getAvailableSizes(event);
})
