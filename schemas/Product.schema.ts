import z from "zod";

export default z.object({
    _id: z.string(),
    attributes: z.object({
        category: z.string().max(15),
        subcategory: z.string().max(15),
        name: z.string().max(100),
        price: z.string().max(10),
        size: z.string().max(15),
        color: z.string().max(15),
        brand: z.string().max(25),
        country: z.string().max(25),
        condition: z.string().max(15),
        description: z.string().max(2000),
        imageDir: z.string().max(100),
    }),
})