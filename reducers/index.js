import { combineReducers } from 'redux'
import loggedReducer from './loggedReducer'
import setUserReducer from './setUserReducer'
// const rootReducer = (state, action) => {
//     // when a logout action is dispatched it will reset redux state
//     if (action.type === 'LOGOUT') {
//         state = undefined;
//     }

//     return appReducer(state, action);
// };




const appReducer = combineReducers({
    isLogged: loggedReducer,
    user: setUserReducer
})
const rootReducer = (state, action) => {
    // return state
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}



export default rootReducer