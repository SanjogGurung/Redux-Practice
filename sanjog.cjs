const redux = require("redux");
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";

// Action
// const action = {
//   type: ORDER_PIZZA,
//   shop_name: "Pizza Shop",
// };

// Action Creator
function orderPizza() {
  return { type: ORDER_PIZZA, shop_name: "Pizza Shop" };
}  

// Reducer
const initialState = {
  pizzaBase: 100,
  toppings: ["cheese", "capsicum"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };

    default:
      return state;
  }
};

// store needs to hold application state

const store = createStore(reducer);

// It exposes a method called getState which gives your application access to the current state in the store
console.log(store.getState());

// Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(()=>console.log("Updated State ", store.getState()));

// Allows state to be updated via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
unsubscribe();
store.dispatch(orderPizza());

