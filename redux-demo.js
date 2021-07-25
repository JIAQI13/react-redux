const redux = require("redux");

//reducer
const countReducer = (state = { counter: 1 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//store
const store = redux.createStore(countReducer);

console.log("log1", store.getState());
//sub
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
