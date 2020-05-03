import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2aa95529-03f3-4e18-bb22-995bc7fdf5db'
    }
});


export const usersApi = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
    },
    followOnUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollowOnUser(userId) {
        return instance.delete(`follow/${userId}`)
    }
};

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(textStatus) {
        return instance.put(`profile/status`, {status: textStatus})
    }
};

export const authApi = {
    requestAutorizing() {
        return instance.get(`auth/me`)
    }
}