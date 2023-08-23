import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"; //import reducer
import ProductSlice from "./ProductSlice";

const store = configureStore ({
    reducer :{
        cart: CartSlice,     //mention reducer which handle add and remobve action
        product: ProductSlice // for api
    }
})

export default store;