import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

export interface OrderDocument extends Document {
    buyerItems: string;
    buyerShippingAddress: string;
    buyerContactEmail: string;
    buyerPurchaseNote: string;
}

const orderSchema = new Schema(
    {
        buyerItems: {
            type: String,
            required: true,
        },
        buyerTotal: {
            type: String,
            required: true,
        },
        buyerShippingAddress: {
            type: String,
            required: true,
        },
        buyerContactEmail: {
            type: String,
            required: true,
        },
        buyerPurchaseNote: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = model<OrderDocument>('Order', orderSchema);