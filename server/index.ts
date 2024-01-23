import { type Nitro } from 'nitropack'
import mongoose from 'mongoose'

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();
    try {
        await mongoose.connect(config.mongoURI);
        const db = mongoose.connection;
        
        console.log('connected to mongo');
    } catch(err) {
        console.log('catcjh', err)
    }
};