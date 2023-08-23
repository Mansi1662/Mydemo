// ==> api call from the redux
// 	- redux used to handle only synchronous behaviour and don't know how to deal withe the asynchronous behaviour
// 	- to handle asynchronous behaviour we need to use middleware in redux 
// 	- to use the middleware we use the popular redux middleware thunk middleware (in redux-toolkit it's already there)
//  - to call the api we need a separate slice beacuse it should not effect add and remove action in cartSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//to handle api data we need to create initialstate as an object 
const initialState  = {
    data: [],  //data which hold the api data
    status:  'idle'    //to handle the status

};

//create slice for api call
// slice don't know how to handle asynchronous data
const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        // fetchProducts(state, action){
        //     state.data = action.payload;
        // }        
    }, //reduces to handle the synchronous task
    extraReducers: (builder) => {
        builder 
        .addCase(getProducts.pending, (state, actions) => {
           state.status = 'loading';
        })
        .addCase(getProducts.fulfilled, (state, actions) => {
            state.data = actions.payload;
            state.status = 'idle';
        })
        .addCase(getProducts.rejected, (state, actions) => {
            state.status = 'Error';
         })

    } //to handle  asynchronous task

})

export const {fetchProducts} = productSlice.actions; //return the action
export default productSlice.reducer;  //return the reducer

//create async thunk middleware
export const getProducts = createAsyncThunk('product/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json() 
    return result;
}) // in this we won't need to dispatch



//to handle asynchronous data we need to create thunk action creator 
// export function  getProducts(){
//     return async function getProductThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json() 
//         // dispatch the data 
//         dispatch(fetchProducts(result))        
//     }
// }