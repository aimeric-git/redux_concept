import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import commentReducer from "./comments/reducerComments";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    phone: phoneReducer, 
    television: tvReducer,
    comments: commentReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
 