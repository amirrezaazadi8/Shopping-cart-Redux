import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer
})

export default rootReducer; 