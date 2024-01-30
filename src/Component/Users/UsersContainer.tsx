import react from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetTotalCountAC, SetUsersAC, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";
import {log} from "util";

export const UsersContainer = () => {
    const {users} = useSelector<AppRootStateType, UsersType>(state => state.users)
    const {totalCount} = useSelector<AppRootStateType, UsersType>(state => state.users)

    const dispatch = useDispatch()
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            dispatch(SetUsersAC(res.data.items))
            dispatch(SetTotalCountAC(25))


        })
        const mas = []
        console.log(totalCount)
        for (let i=1;i<totalCount;i++){
            mas.push(i)
        }
    }

    return <div>{}
        <div>s{}
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
        <Users users={users}/>
    </div>
}