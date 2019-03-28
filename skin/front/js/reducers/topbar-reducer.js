import { FETCH_API, CHANGE_WIDTH } from '../actions/types.js';
/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

const initialState = {
    api: {},
    width: "100%"
};

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_API:
            return {
                ...state,
                api: payload
            };
            break;
        case CHANGE_WIDTH:
            return {
                ...state,
                width: payload
            };
            break;
        default:
            return state;
    }
}