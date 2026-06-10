// import { useState } from "react"
// import Counter from "./components/Counter"
// import {Route, Routes} from "react-router-dom"

// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
// import Users from "./components/Users";
// import Products from "./components/Products";

// function App() {
//   const [On, setOn] = useState(true);
//   function handleClick()
//   {
//     setOn(!On);
//   }
//   return (
//     <>
//     
//       <button className="m-5 p-5 border border-red-900" onClick={handleClick}>
//         {On ? "Hide Counter" : "Show Counter"}
//       </button>
//       {On ? <Counter/> : "Counter hidden"}
//     </>
//   )
// }

// export default App


function App()
{
  return (
    <>
    <ProductList/>
    <Cart></Cart>
    
      {/* <Users/> */}
      {/* <Products/> */}
      {/* <Counter/> */}
    </>
  )
}
export default App;


// create component porodcts -> name, price,
// disp multiplr prods
// add button -> add to cart