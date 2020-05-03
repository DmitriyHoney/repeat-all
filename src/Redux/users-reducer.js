import {usersApi} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_DOWNLOAD = 'TOGGLE_DOWNLOAD';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const ADD_USER_SUBSCRIBE_STACK = 'ADD_USER_SUBSCRIBE_STACK';
const REMOVE_USER_SUBSCRIBE_STACK = 'REMOVE_USER_SUBSCRIBE_STACK';

let initialState = {
    items: [
        {
            name: 'Pushok',
            id: 1,
            uniqueUrlName: null,
            photos: {
                small: 'https://avatars.mds.yandex.net/get-pdb/2091468/2164d44c-300d-4d15-803d-c40a6c31e731/s1200?webp=false',
                large: null
            },
            status: 'I`m true cat!',
            followed: false
        },
        {
            name: 'Murka',
            id: 2,
            uniqueUrlName: null,
            photos: {
                small: 'https://img-2008-07.photosight.ru/13/2755740.jpg',
                large: null
            },
            status: 'I`m taste kitty)',
            followed: true
        }
    ],
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 7,
    isDownload: false,
    usersProcessSubscribe: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                ...action.stateFromApi
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_DOWNLOAD:
            return {
                ...state,
                isDownload  : action.bool
            }
        case FOLLOW_USER:
            return {
                ...state,
                items: state.items.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                items: state.items.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case ADD_USER_SUBSCRIBE_STACK:
            return {
                ...state,
                usersProcessSubscribe: [...state.usersProcessSubscribe, action.userId]
            }
        case REMOVE_USER_SUBSCRIBE_STACK:
            return {
                ...state,
                usersProcessSubscribe: state.usersProcessSubscribe.filter(e => e != action.userId)
            }
        default:
            return {...state}
    }
};


//ActionCreator
const setUsersAC = stateFromApi => ({type: SET_USERS, stateFromApi});
const setCurrentPageAC = pageNumber => ({type: SET_CURRENT_PAGE, pageNumber});
const toggleDownloadAC = bool => ({type: TOGGLE_DOWNLOAD, bool});
export const followAC = userId => ({type: FOLLOW_USER, userId});
export const unFollowAC = userId => ({type: UNFOLLOW_USER, userId});
export const addUserSubscribeStackAC = userId => ({type: ADD_USER_SUBSCRIBE_STACK, userId});
export const removeUserSubscribeStackAC = userId => ({type: REMOVE_USER_SUBSCRIBE_STACK, userId});

//ThinkCreator
export const requestUsersThunkCallback = (pageNumber = initialState.currentPage, pageSize = initialState.pageSize) => (dispatch) => {
    dispatch(setCurrentPageAC(pageNumber));
    dispatch(toggleDownloadAC(false));

    usersApi.getUsers(pageNumber, pageSize)
        .then(response => {
            dispatch(toggleDownloadAC(true));
            dispatch(setUsersAC(response.data));
        })
};
export const followOnUserThunkCallback = (userId) => (dispatch) => {
    dispatch(addUserSubscribeStackAC(userId))
    usersApi.followOnUser(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(removeUserSubscribeStackAC(userId))
                dispatch(followAC(userId));
            }
        })
};
export const unFollowOnUserThunkCallback = (userId) => (dispatch) => {
    dispatch(addUserSubscribeStackAC(userId))
    usersApi.unFollowOnUser(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(removeUserSubscribeStackAC(userId))
                dispatch(unFollowAC(userId));
            }
        })
};

export default usersReducer;