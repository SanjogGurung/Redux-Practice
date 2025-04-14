const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').thunk;
const axios = require('axios');


const FETCH_REQUEST ='FETCH_REQUEST';
const FETCH_SUCCESS ='FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// state
const intialState = {
    loading: false,
    products: [],
    error: false 
}

// Actions
function fetchRequest() {
    return {
        type: FETCH_REQUEST
    }
}

function fetchSucess(products) {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

function fetchError() {
    return {
        type: FETCH_ERROR
    }
}

// Reducers
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                 ...state,
                 loading: true
            }
        case FETCH_SUCCESS:
            return {
                 ...state,
                 loading: false,
                 products: action.payload
            }
        case FETCH_ERROR:
            return {
                 ...state,
                 loading: false,
                 error: true
            }
        default:
            return state;
    }
}

// Thunk Action Creator
const fetchProducts = () => {
    return function(dispatch) {
        dispatch(fetchRequest())
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            // response data
            const products = response.data.map((product) => product.title);
            dispatch(fetchSucess(products))
        })
        .catch(error => {
            // error 
            dispatch(fetchError());
        })
    }
}
// Creating store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProducts());