import {combineReducers} from 'redux';
import counter1 from "./Counter1";
import counter2 from "./Counter2";

//С помощью метода combineReducers - можно объеденить множесто reducer
export default combineReducers({
    counter1, counter2
})