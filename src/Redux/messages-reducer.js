const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
    friendsActive: [
        {
            userId: 2,
            name: 'Jennifer',
            surname: 'Connelly',
            avatar: 'https://i.ebayimg.com/images/g/OgUAAOSwwUJdsBKA/s-l400.jpg'
        },
        {
            userId: 3,
            name: 'Полина',
            surname: 'Рогатовская',
            avatar: 'https://sun1-91.userapi.com/SZvOTsC1UbLUMaAy6tXP0ojEvxjoTfqPwvXPdw/dRZVFx-MeU0.jpg'
        },
    ],
        messageValue: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return state
        case UPDATE_MESSAGE:
            return {
                ...state,
                messageValue:  action.newValue
            };
        default:
            return state;
    }
}


//ActionCreators
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateTextMessageAC = newValue => ({type: UPDATE_MESSAGE, newValue});

export default messagesReducer;