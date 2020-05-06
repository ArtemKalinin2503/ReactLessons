import {ADD, SUB, ADD_NUMBER, ADD_COUNTER2} from "./actionsType";

//Этап второй создать actions
export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add_number(payload) {
    return {
        type: ADD_NUMBER,
        payload: payload
    }
}

export function add_counter2() {
    return {
        type: ADD_COUNTER2
    }
}

export function asyncAdd(payload) {
   return (dispatch) => {
       setTimeout(() =>{
            dispatch(add_number(payload))
       }, 3000)
   }
}

