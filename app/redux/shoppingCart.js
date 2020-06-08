import axios from 'axios'

//actions
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_AMOUNT = 'ADD_AMOUNT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creators
export const addProduct = product => ({
    type: ADD_PRODUCT,
    product
})
export const addAmount = id => ({
    type: ADD_AMOUNT,
    id
})
export const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product
})

//dispatch actions
export const addProductAction = (product) => dispatch => {
    const action = addProduct(product);
    dispatch(action);
}
export const addAmountOfProduct = (id) => dispatch => {
    const action = addAmount(id);
    dispatch(action);
}


//initial state
const initialStore = {
    products: []
}

//reducer
export default function orderReducer(state = initialStore, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const newAddProduct={...action.product};
            newAddProduct.total_amount = 1;
            return { ...state, products: [...state.products, newAddProduct] }
        case ADD_AMOUNT:
           const newProductsArray= state.products.map(product => {
               const newProd={...product};
                if (newProd.id === action.id) {
                    newProd.total_amount++;
                }
                return newProd;
            })
            // console.log(newProductsArray)
            return { ...state,products: newProductsArray }
        case DELETE_PRODUCT:
            const arr = state.products.filter(product => product.id !== action.product.id)
            return { ...state, products: arr }
        default:
            return state;
    }
}