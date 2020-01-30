import {createStore, combineReducers} from 'redux';
import { inputReducer, initialState } from './reducers';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            inputReducer
        })
    );

    return store;
}

