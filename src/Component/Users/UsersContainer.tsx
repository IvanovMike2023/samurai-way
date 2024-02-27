import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {
    SetLoadingAC,
    SetTotalCountAC,
    SetUsersAC,
    SetUsersThunkCreator,
    UsersArray,
    UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {Preloader} from "../common/Preloader";
import {debuglog} from "util";

export const UsersContainer = () => {
    const {
        users,
        totalCount,
        pagesize,
        currentpage,
        loading
    } = useSelector<AppRootStateType, UsersType>(state => state.users)
    const instance = axios.create({
        withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
            'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
        }
    })
    const dispatch = useDispatch()
    useEffect(() => {
        instance.get('users?count=5').then(res => {
            dispatch(SetLoadingAC(true))
            dispatch(SetUsersAC(res.data.items))
            dispatch(SetTotalCountAC(totalCount))
            dispatch(SetLoadingAC(false))

        })

    }, [])

    const OnChange = (e: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pagesize}&page=${e}`)
            .then(res => {
                dispatch(SetLoadingAC(true))
                dispatch(SetUsersAC(res.data.items))
                dispatch(SetTotalCountAC(totalCount))
                dispatch(SetLoadingAC(false))
            })


    }
    if(loading===true)
        return  <Preloader />
    return <div>
        <div>
        </div>
        <Users OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} users={users}/>
    </div>
}