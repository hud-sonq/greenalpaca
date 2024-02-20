import { z } from "zod";

export default z.object({
    buyerItems: z.string().max(200),
    buyerTotal: z.string().max(100),
    buyerShippingAddress: z.string().max(200),
    buyerContactEmail: z.string().max(50),
    buyerPurchaseNote: z.string().max(1000).optional(),
})