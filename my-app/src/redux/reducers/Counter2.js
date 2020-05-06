import {ADD_COUNTER2} from '../actions/actionsType'

//Основной store данного reducer
const initialState = {
    counterTwo: 200
}

//Reducer counter2- в нем опишем actions
export default function counter2(state = initialState, action) {
    //Здесь описиваем все actions
    switch (action.type) {
        case ADD_COUNTER2:
            return {
                counterTwo: state.counterTwo + 1
            }
        default:
            return state
    }
}