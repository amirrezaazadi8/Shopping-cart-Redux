import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";

const rootReducer = combineReducers({
    productState: productsReducer
})

export default rootReducer;