import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const TOGGLE_DOWNLOAD = 'TOGGLE_DOWNLOAD';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profileCard: null,
    posts: [
        {
            userId: 1,
            name: 'Дмитрий',
            surname: 'Большаков',
            avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg',
            postText: 'Hello world!',
            likesCount: 42,
            timePost: '12 апреля 2020',
            postId: 1,
        },
        {
            userId: 1,
            name: 'Дмитрий',
            surname: 'Большаков',
            avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg',
            postText: 'I`m king! ',
            likesCount: 555,
            timePost: '25 июня 2020',
            postId: 2,
        },
    ],
    addPostValue: '',
    isDownload: false,
    status: '--'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                userId: 1,
                name: 'Дмитрий',
                surname: 'Большаков',
                avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg',
                postText: state.addPostValue,
                likesCount: 0,
                timePost: '12 апреля 2020',
                postId: state.posts[state.posts.length - 1].postId + 1
            };
            return {
                ...state,
                addPostValue: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_POST:
            return {
                ...state,
                addPostValue: action.newValue
            };
        case SET_PROFILE:
            return {
                ...state,
                profileCard: action.stateFromApi
            };
        case TOGGLE_DOWNLOAD:
            return {
                ...state,
                isDownload: action.bool
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.statusText
            };
        default:
            return state;
    }
}

//ActionCreator
export const addPostAC = () => ({type: ADD_POST});
export const updateTextPostAC = newValue => ({type: UPDATE_POST, newValue});
const setUserProfileAC = stateFromApi => ({type: SET_PROFILE, stateFromApi});
const toggleDownloadAC = bool => ({type: TOGGLE_DOWNLOAD, bool});
const setStatusAC = statusText => ({type: SET_STATUS, statusText});
//ThunkCreator
export const getUserProfileThunkCallback = userId => dispatch => {
    dispatch(toggleDownloadAC(false));
    profileApi.getUserProfile(userId)
        .then(response => {
            dispatch(toggleDownloadAC(true));
            dispatch(setUserProfileAC(response.data));
        })
}
export const updateStatusThunkCallback = textStatus => dispatch => {
    profileApi.updateStatus(textStatus)
        .then(response => {
            dispatch(setStatusAC(textStatus));
        })
}
export const getStatusThunkCallback = userId => dispatch => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        })
}

export default profileReducer;