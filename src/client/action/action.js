import * as ActionType from '../action/actionType';

export function performChange (currentCount){
    return {
        type:  ActionType.COUNT_CHANGE,
        payload: currentCount
    }
}

export function performChangeAsyn (currentCount){
    return dispatch => {
        dispatch({
            type:  ActionType.COUNT_CHANGE,
            payload: currentCount
        })
    }
}