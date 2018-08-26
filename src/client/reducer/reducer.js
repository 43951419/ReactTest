import * as ActionType from '../action/actionType';
export default (state = {
    count : 0
}, action)=>{
    let reducers = {
        [ActionType.COUNT_CHANGE] : (state,payload)=>{
            return Object.assign({},state,{
                count : payload
            })
        }
    }

    let reducer = reducers[action.type];
    reducer = reducer ? reducer(state,action.payload) : state;
    return reducer;
}
