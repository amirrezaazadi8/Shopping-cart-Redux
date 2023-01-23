import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";

const rootReducer = combineReducers({
    productsState: productsReducer
})

export default rootReducer; 