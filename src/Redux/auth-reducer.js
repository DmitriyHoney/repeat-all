import {authApi} from "../api/api";

const GET_AUTORAZED_STATE = 'GET_AUTORAZED_STATE';
const TOGGLE_AUTORISING = 'TOGGLE_AUTORISING';
const LOADING = 'LOADING';

let initialState = {
    data: null,
    messages: [],
    resultCode: null,
    isAuth: false,
    isDownload: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_AUTORAZED_STATE:
            return {
                ...state,
                ...action.stateFromApi
            }
        case TOGGLE_AUTORISING:
            return {
                ...state,
                isAuth: action.bool
            }
        case LOADING:
            return {
                ...state,
                isDownload: action.bool
            }
        default:
            return {...state}
    }
}

//ActionCreators
const setAutorizedStateAC = stateFromApi => ({type: GET_AUTORAZED_STATE, stateFromApi})
const toggleAutorizingAC = bool => ({type: TOGGLE_AUTORISING, bool})
const loadingAC = bool => ({type: LOADING, bool})
//ThunkCallback
export const getAutorizedStateThunkCallback = () => dispatch => {
    dispatch(loadingAC(false));
    authApi.requestAutorizing()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAutorizedStateAC(response.data));
                dispatch(toggleAutorizingAC(true));
                dispatch(loadingAC(true));
            }
        })
};