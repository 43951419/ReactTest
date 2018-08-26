import * as ActionType from "../action/actionType";


export const bonusMiddleware = store => next => action =>{
    //console.log(action,"after");
    return next(action);
};