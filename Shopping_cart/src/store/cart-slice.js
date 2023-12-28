import { createSlice } from "@reduxjs/toolkit";

const initialState = {items:[] , totalQuantity : 0};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartItem(state , action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({          
                    id : newItem.id,
                    quantity : 1,
                    price : newItem.price,
                    totalPrice : newItem.price,
                    name : newItem.name
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeCartItem(state , action){
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity ===  1){
                state.items = state.items.filter(item => item.id !== id)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;