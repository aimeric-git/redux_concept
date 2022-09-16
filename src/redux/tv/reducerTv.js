import { BUY_TV } from "./type";

const initialState = {
    tv: 15
}

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_TV:
            return {
                ...state,
                tv: state.tv - action.payload
            }
    
        default: return state;
    }
}

export default tvReducer;