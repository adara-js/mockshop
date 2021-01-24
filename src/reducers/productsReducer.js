export function populateProducts(products) {
    return {
        type: "POPULATE_PRODUCTS",
        payload: products
    }
}

export default function productsReducer(products, action) {
    switch(action.type) {
        case "POPULATE_PRODUCTS":
            return action.products
        default:
            return products
    }
}