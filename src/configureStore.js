import {createStore, applyMiddleware, combineReducers} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import reducers from './reducers/reducers';
//import muistiinpanoApp from './reducers/reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}