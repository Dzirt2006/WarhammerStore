import axios from 'axios'

//actions
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creators
export const addProduct = product => ({
    type: ADD_PRODUCT,
    product
})
export const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product
})

//dispatch actions
export const addProductAction = (product) => async dispatch => {
        const action = addProduct(product);
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
            return { ...state, products: [...state.products, action.product] }
        case DELETE_PRODUCT:
            const arr = state.products.filter(product => product.id !== action.product.id)
            return { ...state, products: arr }
        default:
            return state;
    }
}