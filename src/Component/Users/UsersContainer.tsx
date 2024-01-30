import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetTotalCountAC, SetUsersAC, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {log} from "util";

export const UsersContainer = () => {
    const {users, totalCount, pagesize, currentpage} = useSelector<AppRootStateType, UsersType>(state => state.users)
    //const {totalCount} = useSelector<AppRootStateType, UsersType>(state => state.users)

    const dispatch = useDispatch()
    if (users.length === 0) {
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
        <Users  OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} users={users}/>
    </div>
}