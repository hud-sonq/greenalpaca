import z from "zod";

export default z.object({
    category: z.string().max(15),
    subcategory: z.string().max(15).optional(),
    name: z.string().max(100),
    price: z.number().min(0).max(1000000),
    size: z.string().max(15),
    color: z.string().max(15),
    brand: z.string().max(25),
    country: z.string().max(25),
    condition: z.string().max(15),
    description: z.string().max(2000),
    inventory: z.number().min(0).max(1000000),
    imageDir: z.string().max(100),
    images: z.array(z.string().max(500)).optional(),
})