import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks';
const initalState = {};
const middleware = [thunk];

//Comment window redux dev tools while start app
const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
