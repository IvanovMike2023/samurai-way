import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {followTC, getUsersTC, onChangeTC, unfollowTC, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import {Preloader} from "../common/Preloader";
import {LoginPage} from "../LoginPage/LoginPage";

export const UsersContainer = () => {
    const {
        users,
        totalCount,
        pagesize,
        currentpage,
        loading,
        followingProgress
    } = useSelector<AppRootStateType, UsersType>(state => state.users)
    const isauth = useSelector<AppRootStateType, boolean>(state => state.auth.isauth)

    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsersTC(totalCount))
    }, [])

    const OnChange = (e: number) => {
        dispatch(onChangeTC(totalCount,pagesize,e))
    }

    const follow = (id: number) => {
        dispatch(followTC(id))
    }
    const unfollow = (id: number) => {
        dispatch(unfollowTC(id))
    }
    if (loading === true)
        return <Preloader/>
    return <>
        <Users follow={follow} unfollow={unfollow} OnChange={OnChange} currentpage={currentpage} totalCount={totalCount} followingProgress={followingProgress}
               users={users}/>
    </>
}