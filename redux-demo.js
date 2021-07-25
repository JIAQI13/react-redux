const redux = require("redux");

//reducer
const countReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

//store
const store = redux.createStore(countReducer);

console.log(store.getState());
//sub
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

store.subscribe(counterSubscriber);
