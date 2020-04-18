import {createStore , combineReducers} from 'redux';
import {Dishes} from './Dishes'
import { Promotions} from './Promotion'
import {Leaders} from './Leaders'
import {Comments} from './Comments'
import { DISHES } from '../shared/dishes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            leaders : Leaders,
            comments : Comments,
            promotions : Promotions,
        })
    )
    return store
}