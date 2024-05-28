import react, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {
    followeAC, SetCurrentpageAC, SetFollowingProgressAC,
    SetLoadingAC,
    SetTotalCountAC,
    SetUsersAC,
    getUsersThunkCreator, unfollowAC,
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
        loading,
        followingProgress
    } = useSelector<AppRootStateType, UsersType>(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsersThunkCreator(totalCount))
    }, [])

    const OnChange = (e: number) => {
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

        dispatch(SetFollowingProgressAC(id,true))
        usersAPI.followUser(id).then((res) => {
            dispatch(followeAC(id, true))
            dispatch( SetFollowingProgressAC(id,false))
        })
    }
    const unfollow = (id: number) => {
        dispatch(SetFollowingProgressAC(id,true))
        usersAPI.unfollowUser(id).then((res) => {
            dispatch(unfollowAC(id, false))
            dispatch(SetFollowingProgressAC(id,false))

        })
    }
    if (loading === true)
        return <Preloader/>
    return <div>
        <div>
        </div>
        <Users follow={follow} unfollow={unfollow} OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} followingProgress={followingProgress}
               users={users}/>
    </div>
}