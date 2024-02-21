import axios from "axios";
import {SetTotalCountAC, SetUsersAC, UsersArray} from "../Redux/users-reducer";

const instance = axios.create({withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
        'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
    }})
// axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(res => {
//     dispatch(SetUsersAC(res.data.items))
//     dispatch(SetTotalCountAC(totalCount))
//
// })
export const usersAPI = {
    getUsers(){
        return instance.get<CreateTodoListType>('https://social-network.samuraijs.com/api/1.0/users')
    }

}
type CreateTodoListType = {
    totalCount: number
    error: null
    data: {
        items: UsersArray[]
    }
}
