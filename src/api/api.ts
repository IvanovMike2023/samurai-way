import axios from "axios";
import {UsersArray} from "../Redux/users-reducer";

const instance = axios.create({
    withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
        'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
    }
})

export const usersAPI = {
    getUsers() {
        return instance.get('users?count=5').then(res => res.data)
    },
    onChangeUsers(pagasize: number, page: number) {
        return instance.get(`users?count=${pagasize}&page=${page}`)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    }

}

export const authAPI = {
    getMe() {
        return instance.get('auth/me')
    }
}

type CreateTodoListType = {
    totalCount: number
    error: null
    data: {
        items: UsersArray[]
    }
}