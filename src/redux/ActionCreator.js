import * as ActionTypes from './Actiontype'

export const addComment = (dishId , rating , author , comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : author
    }
})