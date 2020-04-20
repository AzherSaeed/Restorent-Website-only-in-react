import * as ActionTypes from './Actiontype'


export const Dishes = (state =  {
    isLoading : true,
    errMess : null , 
    dishes : [] 
    } , action) => {
    switch(action.type){

        case ActionTypes.ADD_DISHES:
            return {...state, isLoading : false , errMess : null , Dishes : action.payload}
            
            case ActionTypes.DISHES_LOADING:
            return {...state, isLoading : true , errMess : null , Dishes : [console.log('render ho gya')]}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading : false , errMess : action.payload , Dishes : []}
        

        default :
            return state
    }
}