import { Product } from "~/server/models/Product.model";
const getAvailableSubcategories = async (event: any) => {
    const available = await Product.distinct('subcategory').lean().exec();
    return available;
}

export default eventHandler(async (event: any) => {
    return await getAvailableSubcategories(event);
})
