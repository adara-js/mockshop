export function populateProducts(products) {
    return {
        type: "POPULATE_PRODUCTS",
        payload: products
    }
}