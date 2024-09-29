import { Box } from "@mui/material";
import Navbar from "./Navbar";


import { useEffect, useState } from "react";
import Products from "./Products";

function Main({productData}) {
      
    console.log(productData)

     

       
 




    return ( 
        <>
       

        <Box sx={{
            display:"flex",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
          
            gap:"10px",
            minHeight:"60vh",
            minWidth:"50%"
         
        }}>


        {productData && productData.map((result)=>(

            <Products cardData={result}/>
            

        ))}








        
        {/* <Products/>
        <Products/>
        <Products/> */}
        </Box>

        </>
     );
}

export default Main;