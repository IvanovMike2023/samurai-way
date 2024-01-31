import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetTotalCountAC, SetUsersAC, UsersArray, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";

export const UsersContainer = () => {
    const {users, totalCount, pagesize, currentpage} = useSelector<AppRootStateType, UsersType>(state => state.users)
    const instance = axios.create({withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0'})
    //  const UsersAPI = {
    //     getUsers() {
    //         return instance.get<CreateTodoListType>(`/users`)
    //     }
    // }
    type CreateTodoListType = {
        totalCount: number
        error: null
        data: {
            items: UsersArray[]
        }
    }
    const dispatch = useDispatch()
    if (users.length === 0) {
// useEffect(()=>{
//     const promise =  UsersAPI.getUsers().then((res)=>{
//             dispatch(SetUsersAC(res.data.data.items))
//             dispatch(SetTotalCountAC(totalCount))
//             console.log(res.data.data.items)
//         }
//     ).catch(er=>console.log(er))
// },[])

        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(res => {
            dispatch(SetUsersAC(res.data.items))
            dispatch(SetTotalCountAC(totalCount))

        })
    }
    const OnChange = (e: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pagesize}&page=${e}`).then(res => {
            dispatch(SetUsersAC(res.data.items))
            dispatch(SetTotalCountAC(totalCount))

        })

    }

    return <div>
        <div>
        </div>
        <Users OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} users={users}/>
    </div>
}