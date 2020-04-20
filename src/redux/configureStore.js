import {createStore , combineReducers ,  applyMiddleware} from 'redux';
import {Dishes} from './Dishes'
import { createForms } from 'react-redux-form'
import { Promotions} from './Promotion'
import {Leaders} from './Leaders'
import {Comments} from './Comments'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './Form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            leaders : Leaders,
            comments : Comments,
            promotions : Promotions,
            ...createForms({
                feedback : InitialFeedback
            })
        }),
        applyMiddleware(thunk , logger)
    );
    return store
}