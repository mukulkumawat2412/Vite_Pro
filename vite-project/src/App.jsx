import { useEffect, useState } from "react"
import Homepage from "./Comp/Homepage"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SingleProduct from "./Comp/SingleProduct"
import Navbar from "./Comp/Navbar"
import Cart from "./Comp/Cart"




function App() {
  const[value,setValue]=useState([])


  useEffect(()=>{
      fetch('https://fakestoreapi.com/products/').then((data)=>{

          return data.json()

   }).then((result)=>{
       console.log(result)
       setValue(result)
   })


  },[])







  return (
    <>

    <BrowserRouter> 
    <Navbar/>
    <Routes>
    <Route path="/"element={ <Homepage productData={value}/>}/>
    <Route path="/product/:id" element={<SingleProduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
     
   


    </BrowserRouter>

   

  


     
    </>
  )
}

export default App
