import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    //         {
    //         id:1,
    //         cartItems:[],
    //         quantity:0,
    //          selected:true
    // }
  ]
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const existingItem = state.items.find((eachItem) => {
        return eachItem.cartItems.id === action.payload.id
      }
      )
      if (existingItem && existingItem.quantity < 5) {
        existingItem.quantity += 1;
      }
      else {
        const tempCart = {
          id: nanoid(),
          cartItems: action.payload,
          quantity: 1
        }
        state.items.push(tempCart);
      }


    },
    increaseQuantity: (state, action) => {
      const existingItem=state.items.find(eachItem => eachItem.id === action.payload)
      if(existingItem && existingItem.quantity>1){

        existingItem.quantity-=1;
      }
    }
    ,
    decreaseQuantity:(state,action)=>{
      const existingItem=state.items.find(eachItem => eachItem.id === action.payload)
      if(existingItem && existingItem.quantity<5){

        existingItem.quantity+=1;
      }
    },
    deleteItem:(state,action)=>{
      const afterDelete=state.items.filter((eachItem,index)=>{
        console.log(eachItem.cartItems.id)
        return eachItem.cartItems.id!==action.payload;
      })
      state.items=[...afterDelete];

    }
  }
})

export const { addToCart, increaseQuantity,decreaseQuantity, deleteItem } = cartSlice.actions
export default cartSlice.reducer