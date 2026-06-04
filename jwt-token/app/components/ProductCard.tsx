'use client'

import storeProducts, { getAllProducts } from "../actions/storeProducts";
import { useEffect, useState } from "react";

export default function ProductCard()
{
    const [products,setProducts] = useState([]);
    async function fetchProducts()
    {
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()

            // await storeProducts(data);

            // console.log(data)
            setProducts(data);


            const output = await getAllProducts();
            console.log(output)

        }catch(error){
            console.log("Error fetching the products : ",error);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])
    


    return (
        <div className="flex flex-col gap-5 mx-5">
        {
            products.map((prod:any) => (
                <div key={prod.id} className="border bg-slate-100 p-5">
                    <h3>{prod.title}</h3>
                    <h3>{prod.price}</h3>
                    <h3>{prod.description}</h3>
                    <h3>{prod.category}</h3>
                </div>
            ))
        }
        </div>
    )
}
