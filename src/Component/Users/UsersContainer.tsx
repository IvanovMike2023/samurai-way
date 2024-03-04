import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {
    followeAC, SetCurrentpageAC,
    SetLoadingAC,
    SetTotalCountAC,
    SetUsersAC,
    SetUsersThunkCreator, unfollowAC,
    UsersArray,
    UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {Preloader} from "../common/Preloader";
import {debuglog, log} from "util";

export const UsersContainer = () => {
    const {
        users,
        totalCount,
        pagesize,
        currentpage,
        loading
    } = useSelector<AppRootStateType, UsersType>(state => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        usersAPI.getUsers()
            .then(res => {
                dispatch(SetLoadingAC(true))
                dispatch(SetUsersAC(res.items))
                dispatch(SetTotalCountAC(totalCount))
                dispatch(SetLoadingAC(false))

            }).catch(() => {
            console.log('sacasc')
        })

    }, [])

    const OnChange = (e: number) => {
        console.log(e)
        usersAPI.onChangeUsers(pagesize, e)
            .then(res => {
                dispatch(SetLoadingAC(true))
                dispatch(SetUsersAC(res.data.items))
                dispatch(SetTotalCountAC(totalCount))
                dispatch(SetCurrentpageAC(e))
                dispatch(SetLoadingAC(false))
            })


    }

    const follow = (id: number) => {
        usersAPI.followUser(id).then((res) => {
            dispatch(followeAC(id, true))
        })
    }
    const unfollow = (id: number) => {
        usersAPI.unfollowUser(id).then((res) => {
            dispatch(unfollowAC(id, false))
        })
    }
    if (loading === true)
        return <Preloader/>
    return <div>
        <div>
        </div>
        <Users follow={follow} unfollow={unfollow} OnChange={OnChange} currentpage={currentpage} totalCount={totalCount}
               users={users}/>
    </div>
}