import {ADD, SUB, ADD_NUMBER} from '../actions/actionsType'

//Основной store данного reducer
const initialState = {
    counterOne: 0
}

//Reducer counter1- в нем опишем actions
export default function counter1(state = initialState, action) {
    //Здесь описиваем все actions
    switch (action.type) {
        case ADD:
            return {
                counterOne: state.counterOne + 1
            }
        case SUB:
            return {
                counterOne: state.counterOne - 1
            }
        case ADD_NUMBER:
            return {
                counterOne: state.counterOne + action.payload //Payload - это передоваеммый параметр
            }
        default:
            return state
    }
}