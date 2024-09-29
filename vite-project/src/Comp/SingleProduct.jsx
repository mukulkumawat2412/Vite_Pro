import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function SingleProduct() {


  const[singleProduct,setsingleProduct]=useState([])




   const params =  useParams()
   console.log(params)


   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.id}`).then((data)=>{
      
        return data.json()

 }).then((result)=>{
     console.log(result)
     setsingleProduct(result)
     
 })


},[])
   



   

    return (
        <>
         <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={singleProduct.image}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {singleProduct.title}
                    </a>
                  </p>
                  <p className="small text-muted">Product</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">Rated {singleProduct.rating && singleProduct.rating.rate}</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                  Price:- ${singleProduct.price}
                  </a>
                </p>
                <p className="text-dark"></p>
              </div>
              <p className="small text-muted">VISA Platinum</p>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <a href="#!" className="text-dark fw-bold">
                  <MDBBtn color="danger">
                    Cancel
                  </MDBBtn>
                </a>
                <MDBBtn color="success">Add To Cart</MDBBtn>
                <MDBBtn color="primary">Buy now</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
      



        </>
      );
}

export default SingleProduct;