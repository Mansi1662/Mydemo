import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//create slice per feature 
const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        add(state, action) {
            // state.push(action.payload)
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove(state, action) {
            // return state.filter(item => item.id !== action.payload) //only remove the sleceted item based on it's id 
            const idToRemove = action.payload;
            return state.filter(item => item.id !== idToRemove);
        },
        reduceQt(state,action){
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
        
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
                if (existingItem.quantity === 0) {
                    return state.filter(item => item.id !== id);
                }
            }
        }
    }
})

export const {add, remove, reduceQt} = cartSlice.actions; //return the action
export default cartSlice.reducer;  //return the reducer