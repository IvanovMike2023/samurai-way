import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetTotalCountAC, SetUsersAC, UsersArray, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {usersAPI} from "../../api/api";

export const UsersContainer = () => {
    const {users, totalCount, pagesize, currentpage} = useSelector<AppRootStateType, UsersType>(state => state.users)

    console.log(users)
    const dispatch = useDispatch()
    useEffect(() => {
    if (users.length === 0) {
        usersAPI.getUsers().then((res) => {
                console.log(res.data.data)
                dispatch(SetUsersAC(res.data.data.items))
                dispatch(SetTotalCountAC(totalCount))
                console.log(res.data.data.items)
            }
        ).catch(er => console.log(er))
    }
    },[users])
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