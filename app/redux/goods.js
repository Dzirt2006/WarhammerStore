import axios from 'axios'

//actions
export const SET_GOODS = 'SET_GOODS';
export const SET_SPECIFIC_GOOD = 'SET_SPECIFIC_GOOD';

//action creators
export const setGoods = goods => ({
    type: SET_GOODS,
    goods
})
export const setSpecificGood = good => ({
    type: SET_SPECIFIC_GOOD,
    good
})


//thunk
export const fetchGoods = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/goods');
        const action = setGoods(data);
        dispatch(action);
    } catch (err) {
        console.error('Fetch Goods Fail', err);
    }
}
export const fetchSpecific = (id) => async dispatch => {
    try {
        const { data } = await axios.get(`/api/goods/${id}`)
        const action = setSpecificGood(data);
        dispatch(action);
    } catch (error) {
        console.error(`Fetch ${id} Stuff failed`, error);
    }
}


//initial state
const initialStore = {
    all: [],
    specific: []
}

//reducer
export default function goodsReducer(state = initialStore, action) {
    switch (action.type) {
        case SET_GOODS:
            return { ...state, all: action.goods }
        case SET_SPECIFIC_GOOD:
            return { ...state, specific: action.good }
        default:
            return state;
    }
}