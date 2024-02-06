import mongoose from "mongoose";


const productImages = async () => {
    const productImages = await mongoose.connection.db.collection('productimages').find({}).toArray();
    return productImages;
};


export default eventHandler(async (event) => {
    return await productImages();
})
