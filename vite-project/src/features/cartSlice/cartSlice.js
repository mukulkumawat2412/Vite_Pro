import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  
    cart: [],

  }



export const cartSlice = createSlice({
    name:'counter',

  initialState,
  reducers:{
    addToCart:(state,action)=>{

      const {id} = action.payload

     let find =  state.cart.findIndex((data)=>data.id === id)
      
     if(find !== -1){
      state.cart[find]={
      quantity: state.cart[find].quantity + 1
      }
     }else{
      state.cart.push({...action.payload,quantity:1})

     }
      
      

    },

    removeItem:(state,action)=>{
      state.cart = state.cart.filter((value,index)=>{
         return value.id !== action.payload.id 
      })
    },

    removeAll:(state,action)=>{
      state.cart = []
    },


    incrementItem:(state,action)=>{
      state.cart = state.cart.map((item)=>{
        if(item.id === action.payload.id){
          return {...item,quantity:state.cart.quantity+1}
        }
      })
    }










  } 
  
  
})


export const {addToCart,removeItem,removeAll,incrementItem} = cartSlice.actions

export default cartSlice.reducer