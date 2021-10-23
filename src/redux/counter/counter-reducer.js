
import { combineReducers } from 'redux';
import { DECREMENT, INCREMENT } from './counter-types';

const stepReducer = (state =5, action)=> state;

const valueReducer = (state = 10, {type, payload}) => {
    switch (type) {
        case INCREMENT:
            return state + payload;
            
        case DECREMENT:
            return state - payload;
    
        default:
                return state;          
    }
}

const counterReducer = combineReducers({
    value: valueReducer,
    step: stepReducer,
});



export default counterReducer;