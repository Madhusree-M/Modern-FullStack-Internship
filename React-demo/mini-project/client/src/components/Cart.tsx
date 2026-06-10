// we will display all added items and their price
// we calculate the total price

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart()
{
    const {cart} = useContext(CartContext);

    // calculate the total proce of added items from the cart

    const totalPrice = cart.reduce((acc:any, prod:any) => {
        return acc + Number(prod.price);
    },0)

    return (
        <div>
            {
                cart && cart.map((prod:any) => {
                    <div key={prod.id}>
                        <h3>{prod.name} - ₹{prod.price}</h3>
                        <hr />
                    </div>
                })
            }
            <h3>Total Price : ₹{totalPrice}</h3>
        </div>
    )
}