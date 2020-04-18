import { COMMENTS } from '../shared/Comments'
import { PROMOTIONS } from '../shared/Promotion'
import { LEADERS } from '../shared/leaders'
import {DISHES} from '../shared/dishes'

export const InitialState = {
    dishes : DISHES,
    comment : COMMENTS,
    promotions: PROMOTIONS,
    leaders : LEADERS
};

export const Reducer = (state = InitialState  , action) => {
    return state;
}

