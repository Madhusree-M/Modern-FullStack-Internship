'use server'
import { prisma } from "../lib/prisma";

export default async function storeProducts(products:any)
    {
        for(const prod of products)
        {
            await prisma.food_items.create({
                data:{
                    item_name : prod.title,
                    price : prod.price,
                    category : prod.category
                }
            })
        }
    }

    export async function getAllProducts()
    {
        const data = await prisma.food_items.findMany();
        
        // console.log("data from sa :::: ",data);
        return data;
    }