import { combineReducers } from "redux";
import productsReducer from "./productsSlice"

const rootReducer = combineReducers({
    products: productsReducer
});

export default rootReducer;