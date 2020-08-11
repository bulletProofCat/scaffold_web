import { combineReducers } from "redux";

/**
 * {
 *      tick: 123,
 *      nothing: {}
 * }
 */
export default combineReducers({ tick, nothing });

function tick(state = 0, action: any) {
    console.log("tick", state, action);

    switch (action.type) {
        case "TICK":
            return state + 1;
        case "TRIGGER_TICK":
            return state + 1;
        default: 
            return state;
    }
}

function nothing(state = {}, action: any) {
    console.log("nothing, ", state, action);
    return {};
}
