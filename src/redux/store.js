import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import contactsReducer from './phonebook/phonebook-reducer';
// 1й вариант

// const initialState = {
//     counter: {
//         value: 10,
//         step: 5,
//     }
// };

// const reducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case 'counter/Increment':
//             return {...state, 
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value + payload,
//                 },
//              };

        
//         case 'counter/Decrement':
//             return {...state, 
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value - payload,
//                 },
//              };
    
//         default:
//                 return state;          
//     }
// }

// 2й вариант

// const counterInitialState = {
//     value: 10,
//         step: 5,
// }


// const counterReducer = (state = counterInitialState, {type, payload}) => {
//     switch (type) {
//         case 'counter/Increment':
//             return {
//                 ...state,
//                 value: state.value + payload
//             };

        
//         case 'counter/Decrement':
//             return {
//                 ...state,
//                 value: state.value - payload
//             };
    
//         default:
//                 return state;          
//     }
// }

// 3й вариант

// const rootReducer =combineReducers({
//     counter: counterReducer,
// });





const rootReducer =combineReducers({
    counter: counterReducer,
    contacts: contactsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;