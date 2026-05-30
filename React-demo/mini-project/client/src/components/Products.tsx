import { useEffect, useState } from "react";

type Product = {
    id: number,
    title: string,
    category: string,
    price: number
}

function Products()
{
    const [data, setData] = useState<Product[]>([]);
    const[isLoading, setIsLoading] = useState<boolean>(true);
    const[error, setError] = useState<string>("");

    async function getData()
    {
        fetch("https://dummyjson.com/products1")
        .then((res) => res.json())
        .then((response) => {
            setData(response.products)
            setIsLoading(!isLoading)
        })
        .catch((err) => {
            setError(err.message)
        })

        if(error)
        {
            console.log(error)
        }
    
    }
    useEffect(() => {
        getData();
    },[]);
    return(
        <>
        <h1>Products Data</h1>
        {
            isLoading ? "loading" : 
            data.map((product) => {
            return(
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <h3>{product.category}</h3>
                    <h3>{product.price}</h3>
                </div>
            )
        })
    }
        </>
    )
}

export default Products;