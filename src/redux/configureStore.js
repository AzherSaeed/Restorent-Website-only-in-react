import {createStore} from 'redux';
import {Reducer , InitialState} from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        InitialState
    )
    return store
}