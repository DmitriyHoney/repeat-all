import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    authPage: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;