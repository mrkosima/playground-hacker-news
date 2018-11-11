import { ADD } from "./consts";

export function add() {
    return {
        type: ADD,
    }
}

export function addAsync() {
    return dispatch => {
        setTimeout(() => dispatch(add()), 1000);
    }
}
