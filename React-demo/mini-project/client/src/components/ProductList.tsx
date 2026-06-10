import { useContext } from "react"
import {CartContext} from "../context/CartContext"
const products = [
    {
        id:1,
        name: "Laptop",
        price: "150000"
    },
    {
        id:2,
        name: "Iphone",
        price: "90000"
    },
    {
        id:3,
        name: "Speaker",
        price: "70000"
    },{

        id:4,
        name: "Samsung s24 ultra",
        price: "139000"
    }
]

export default function ProductList ()
{
    // display all products
    // in front of each product - display "ADD TO CART" button

    const {cart,setCart} = useContext(CartContext)

    function addToCart(product:any)
    {
        setCart([...cart,product])
        alert("Item added to Cart successfully")
    }

    return(
        <>
        {
            products.map((prod) => (
                <div key={prod.id}>
                    <h1>{prod.name}</h1>
                    <h1>{prod.price}</h1>

                    <button onClick={() => addToCart(prod)}>Add to Cart</button>
                </div>
            ))
        }
        </>
    )
}