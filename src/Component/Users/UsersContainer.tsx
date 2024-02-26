import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetTotalCountAC, SetUsersAC, SetUsersThunkCreator, UsersArray, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {usersAPI} from "../../api/api";

export const UsersContainer = () => {
    const {users, totalCount, pagesize, currentpage} = useSelector<AppRootStateType, UsersType>(state => state.users)
    const instance = axios.create({withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
            'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
        }})
    //console.log(users)
    const dispatch = useDispatch()
    useEffect(() => {
        instance.get('users?count=5').then(res => {
            dispatch(SetUsersAC(res.data.items))
    dispatch(SetTotalCountAC(totalCount))

})

    },[])
    const OnChange = (e: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pagesize}&page=${e}`)
        //usersAPI.onChangeUsers(pagesize,e)
            .then(res => {
               // console.log(res.data.data)
            dispatch(SetUsersAC(res.data.items))
            dispatch(SetTotalCountAC(totalCount))

        })

    }
    if (!users) {
        return <div>aacdacas</div>
    }
    return <div>
        <div>
        </div>
        <Users OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} users={users}/>
    </div>
}