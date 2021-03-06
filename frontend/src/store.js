import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    // this will contain our reducers   
})

const initialState ={}

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

    export default store;