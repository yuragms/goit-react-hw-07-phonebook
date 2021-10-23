// export const increment = value => ({

import { DECREMENT, INCREMENT } from "./counter-types";

    
//        type: 'counter/Increment',
//        payload: value,
    
// });


export const increment = value => ({
    
       type: INCREMENT,
       payload: value,
    
});

export const decrement = value => ({
    
    type: DECREMENT,
    payload: value,
 
});


