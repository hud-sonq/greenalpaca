import { Schema, model, Document } from 'mongoose';

export interface ProductDocument extends Document {
    _id: string;
    attributes: {
        category: string;
        subcategory: string;
        name: string;
        price: string;
        size: string;
        color: string;
        brand: string;
        country: string;
        condition: string;
        description: string;
        imageDir: string; // Corrected naming
    };
}

const productSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        attributes: {
            category: {
                type: String,
                required: true,
                trim: true,
            },
            subcategory: {
                type: String,
                required: true,
                trim: true,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
                trim: true,
            },
            size: {
                type: String,
                required: true,
                trim: true,
            },
            color: {
                type: String,
                required: true,
                trim: true,
            },
            brand: {
                type: String,
                required: true,
                trim: true,
            },
            country: {
                type: String,
                required: true,
                trim: true,
            },
            condition: {
                type: String,
                required: true,
                trim: true,
            },
            description: {
                type: String,
                required: true,
            },
            imageDir: {
                type: String,
                required: true,
                trim: true,
            },
        },
    },
    { timestamps: true }
);

export const Product = model<ProductDocument>('Product', productSchema);
