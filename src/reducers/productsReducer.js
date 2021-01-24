import thunk from "redux-thunk"
import {populateProducts} from "./src/actions"


export default function productsReducer(products, action) {
    switch(action.type) {
        case "POPULATE_PRODUCTS":
            return action.products
        default:
            return products
    }
}