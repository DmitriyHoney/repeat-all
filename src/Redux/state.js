import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const store = {
    _state: {
        profilePage: {
            profileCard: {
                userId: 1,
                name: 'Дмитрий',
                surname: 'Большаков',
                avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg'
            },
            posts: [
                {
                    userId: 1,
                    name: 'Дмитрий',
                    surname: 'Большаков',
                    avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg',
                    postText: 'Hello world!',
                    likesCount: 42,
                    timePost: '12 апреля 2020'
                },
                {
                    userId: 1,
                    name: 'Дмитрий',
                    surname: 'Большаков',
                    avatar: 'https://sun9-8.userapi.com/c7001/v7001025/52053/fFmUwZgvP7A.jpg',
                    postText: 'I`m king! ',
                    likesCount: 555,
                    timePost: '25 июня 2020'
                },
            ],
            addPostValue: ''
        },
        messagesPage: {
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
        },
    },
    _callSubscribe() {
        console.log('State did change');
    },
    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscribe = observe
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscribe(this.getState());
    }
};

window.store = store;
export default store;